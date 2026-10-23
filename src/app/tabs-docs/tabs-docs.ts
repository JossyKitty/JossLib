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
      itemID: "estudios"
    },
    {
      label: "Trabajo",
      itemID: "trabajo"
    },
    {
      label: "Habilidades",
      itemID: "habilidades"
    },
    {
      label: "CV",
      itemID: "CV"
    },

  ];
}
