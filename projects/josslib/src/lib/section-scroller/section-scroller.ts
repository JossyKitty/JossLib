import { ViewportScroller, NgClass, CommonModule } from '@angular/common';
import { Component, DoCheck, HostListener, inject, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationSkipped,
  NavigationSkippedCode,
  Router,
  RouterLink,
} from '@angular/router';
import { filter, Subscription } from 'rxjs';

export interface ISectionHeader {
  label: string;
  itemID: string;
  imgSrc?: string[];
}

@Component({
  selector: 'jl-section-scroller',
  imports: [RouterLink, NgClass, CommonModule],
  templateUrl: './section-scroller.html',
  styleUrl: './section-scroller.scss',
})
export class SectionScroller implements OnInit, OnDestroy, DoCheck {
  @Input() sections: ISectionHeader[] = [];
  @Input() scrollTopOffset: number = 144;

  viewportScroller = inject(ViewportScroller);
  router = inject(Router);
  route = inject(ActivatedRoute);
  routerSuscription: Subscription | undefined;
  selectedItemID: string = '';
  HTMLHeadingElements: HTMLHeadingElement[] = [];
  savedJSON: string = '';

  ngOnInit(): void {
    this.viewportScroller.setOffset([0, this.scrollTopOffset]);
    this.routerSuscription = this.router.events.subscribe((navigationEvent) => {
      if (navigationEvent instanceof NavigationEnd) {
        const URLArray = navigationEvent.urlAfterRedirects.split('#');
        const fragment = URLArray[URLArray.length - 1];
        this.viewportScroller.scrollToAnchor(fragment, { behavior: 'smooth' });
        this.selectedItemID = fragment;
      }
      if (navigationEvent instanceof NavigationSkipped && navigationEvent.code === NavigationSkippedCode.IgnoredSameUrlNavigation) {
        const fragment = this.route.snapshot.fragment ?? "";
        this.viewportScroller.scrollToAnchor(fragment, { behavior: 'smooth' });
        this.selectedItemID = fragment;
      }
    });
  }

  ngDoCheck(): void {
    const JSONSections: string = JSON.stringify(this.sections);
    if (JSONSections !== this.savedJSON) {
      this.savedJSON = JSONSections;
      this.HTMLHeadingElements = [];
      this.getHeaders();
    }
  }

  ngOnDestroy(): void {
    if (this.routerSuscription) {
      this.routerSuscription.unsubscribe();
    }
  }

  @HostListener('window:scroll')
  detectSection() {
    this.getHeaders();
    for (let headingIndex = 0; headingIndex < this.HTMLHeadingElements.length; headingIndex++) {
      const heading = this.HTMLHeadingElements[headingIndex];
      const rect = heading.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      const isShown = topShown && bottomShown;
      if (isShown) {
        this.selectedItemID = heading.id;
        break;
      }
    }
  }

  getHeaders() {
    if (this.HTMLHeadingElements.length <= 0 && this.sections.length > 0) {
      this.sections.forEach((sectionData) => {
        const headingElement = document.getElementById(sectionData.itemID);
        if (headingElement) {
          this.HTMLHeadingElements.push(headingElement as HTMLHeadingElement);
        }
      });
    }
  }
}
