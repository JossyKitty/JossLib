import { Component } from '@angular/core';
import { ScrollToTop } from '../../../projects/josslib/src/public-api';

@Component({
  selector: 'app-scroll-to-top-docs',
  imports: [ScrollToTop],
  templateUrl: './scroll-to-top-docs.html',
  styleUrl: './scroll-to-top-docs.scss',
})
export class ScrollToTopDocs {}
