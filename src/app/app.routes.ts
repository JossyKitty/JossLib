import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { HeaderDocs } from './header-docs/header-docs';
import { ScrollToTopDocs } from './scroll-to-top-docs/scroll-to-top-docs';

export const routes: Routes = [
  { path: 'header', component: HeaderDocs },
  { path: 'scroll-to-top', component: ScrollToTopDocs },
  { path: '**', component: Landing },
];
