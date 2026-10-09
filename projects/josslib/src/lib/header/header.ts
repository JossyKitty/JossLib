import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface IHeaderLink {
  label:string;
  link: string;
}

@Component({
  selector: 'jl-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true
})
export class Header {
  @Input() links:IHeaderLink[] = [];
  @Input() darkMode:boolean = false;
  @Output() darkModeChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  openedMenu:boolean = false;

  switchTheme() {
    this.darkMode = !this.darkMode;
    this.darkModeChange.emit(this.darkMode);
  }
}
