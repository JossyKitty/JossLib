import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { HeaderDocs } from './header-docs/header-docs';

export const routes: Routes = [
  { path: 'header', component: HeaderDocs },
  { path: '**', component: Landing },
];
