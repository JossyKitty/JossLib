import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Header, IHeaderLink } from '../../projects/josslib/src/public-api';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('library-joss');

  menuItems: IHeaderLink[] = [
    { label: "Inicio", link: "/landing"},
    { label: "Header", link: "/header"},
  ];
}
