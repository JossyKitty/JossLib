import { Component } from '@angular/core';
import { Header, IHeaderLink } from '../../../projects/josslib/src/public-api';

@Component({
  selector: 'app-header-docs',
  imports: [Header],
  templateUrl: './header-docs.html',
  styleUrl: './header-docs.scss',
})
export class HeaderDocs {
  links:IHeaderLink[] = [
    {label: "Inicio",link:"/landing"},
    {label: "Acerca de",link:""},
    {label: "Portafolio",link:""},
    {label: "Contacto",link:""},
  ]
}
