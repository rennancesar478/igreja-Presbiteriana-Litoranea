import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { FooterComponent } from "../../components/footer-component/footer-component";

@Component({
  selector: 'app-boletins',
  imports: [Header, FooterComponent],
  templateUrl: './boletins.html',
  styleUrl: './boletins.css',
})
export class Boletins {

}
