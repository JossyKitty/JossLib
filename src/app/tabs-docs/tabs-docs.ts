import { Component } from '@angular/core';
import { ITabItem, Tabs } from '../../../projects/josslib/src/public-api';

@Component({
  selector: 'app-tabs-docs',
  imports: [Tabs],
  templateUrl: './tabs-docs.html',
  styleUrl: './tabs-docs.scss',
})
export class TabsDocs {

  tabs:ITabItem[] = [
    {
      label: "Estudios",
      itemID: "estudios",
      imgSrc: ["ico_estudios.avif","ico_estudios.png"]
    },
    {
      label: "Trabajo",
      itemID: "trabajo",
      imgSrc: ["ico_trabajo.avif","ico_trabajo.png"]
    },
    {
      label: "Habilidades",
      itemID: "habilidades",
      imgSrc: ["ico_habilidades.avif","ico_habilidades.png"]
    },
    {
      label: "CV",
      itemID: "CV",
      imgSrc: ["ico_cv.avif","ico_cv.png"]
    },

  ];
}
