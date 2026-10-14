import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../theme-service';

export interface IHeaderLink {
  label: string;
  link: string;
}

@Component({
  selector: 'jl-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
})
export class Header implements AfterViewInit {
  @Input() links: IHeaderLink[] = [];
  @Input() showThemeButton: boolean = true;
  @Input() darkMode: boolean = false;
  @Input() useInternalThemeService: boolean = true;
  @Output() darkModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  openedMenu: boolean = false;
  themeService = inject(ThemeService);

  ngAfterViewInit(): void {
    this.darkMode = this.themeService.darkMode;
  }

  switchTheme() {
    this.darkMode = !this.darkMode;
    this.darkModeChange.emit(this.darkMode);
    if (this.useInternalThemeService) {
      this.themeService.switchTheme();
    }
  }
}
