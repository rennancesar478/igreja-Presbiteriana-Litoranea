import { Component } from '@angular/core';
import { CardsComponent } from "../cards-component/cards-component";

@Component({
  selector: 'app-header',
  imports: [CardsComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
