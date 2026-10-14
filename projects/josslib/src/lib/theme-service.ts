import { DOCUMENT, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.getTheme();
  }

  darkMode: boolean = false;
  temas: string[] = ['josselyn', 'josselyn-dark'];

  loadTheme() {
    const tema = this.darkMode ? this.temas[1] : this.temas[0];
    localStorage.setItem('theme', tema);
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = tema + '.css';
    }
  }

  switchTheme() {
    this.darkMode = !this.darkMode;
    this.loadTheme();
  }

  getTheme() {
    let lsTheme = localStorage.getItem('theme');
    if (lsTheme != null) {
      this.darkMode = lsTheme === this.temas[1];
    } else {
      //Si el usuario no ha configurado / cambiado su tema, se usa el que detecte el navegador.
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.loadTheme();
  }
}
