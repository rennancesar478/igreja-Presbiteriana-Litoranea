import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { CardsComponent } from "../../components/cards-component/cards-component";
import { FooterComponent } from '../../components/footer-component/footer-component';

@Component({
  selector: 'app-home',
  imports: [Header, CardsComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
