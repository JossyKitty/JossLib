import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'jl-scroll-to-top',
  imports: [CommonModule],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.scss',
})
export class ScrollToTop {
  /** La cantidad de px que debe scrollear para que se muestre el botón
   *  @default 125 */
  @Input() scrollHeightToShow: number = 125;
  @ViewChild('pawSVG') pawSVGRef: ElementRef<SVGElement> | undefined;
  showButton: boolean = false;
  scrolling: boolean = false;

  @HostListener('window:scroll')
  detectIfScrolled() {
    if (!this.scrolling) {
      this.showButton = window.scrollY >= this.scrollHeightToShow;
    }
  }

  scrollToTop() {
    this.showButton = false;
    this.scrolling = true;
    if (this.pawSVGRef) {
      this.pawSVGRef.nativeElement.getAnimations().forEach((animation) => {
        animation.currentTime = 0;
        animation.play();
      });
    }
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 480);
    setTimeout(() => {
      this.scrolling = false;
    }, 1200);
  }
}
