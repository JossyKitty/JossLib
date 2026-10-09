import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'jl-scroll-to-top',
  imports: [CommonModule],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.scss',
})
export class ScrollToTop {
  @ViewChild('pawSVG') pawSVGRef: ElementRef<SVGElement> | undefined;

  scrollToTop() {
    if (this.pawSVGRef) {
      this.pawSVGRef.nativeElement.getAnimations().forEach((animation) => {
        animation.currentTime = 0;
        animation.play();
      });
    }
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },480);
  }
}
