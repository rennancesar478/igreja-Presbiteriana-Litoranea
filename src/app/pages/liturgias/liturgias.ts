import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { FooterComponent } from "../../components/footer-component/footer-component";

@Component({
  selector: 'app-liturgias',
  imports: [Header, FooterComponent],
  templateUrl: './liturgias.html',
  styleUrl: './liturgias.css',
})
export class Liturgias {

}
