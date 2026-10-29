import { ViewportScroller, NgClass, CommonModule } from '@angular/common';
import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
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
export class SectionScroller implements OnInit, OnDestroy {
  @Input() sections: ISectionHeader[] = [];
  @Input() scrollTopOffset: number = 144;

  viewportScroller = inject(ViewportScroller);
  router = inject(Router);
  route = inject(ActivatedRoute);
  routerSuscription: Subscription | undefined;
  selectedItemID : string = "";

  ngOnInit(): void {
    this.viewportScroller.setOffset([0, this.scrollTopOffset]);
    this.routerSuscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((navigationEvent: NavigationEnd) => {
        const URLArray = navigationEvent.urlAfterRedirects.split('#');
        const fragment = URLArray[URLArray.length - 1];
        this.viewportScroller.scrollToAnchor(fragment, { behavior: 'smooth' });
        this.selectedItemID = fragment;
      });
  }

  ngOnDestroy(): void {
    if (this.routerSuscription) {
      this.routerSuscription.unsubscribe();
    }
  }
}
