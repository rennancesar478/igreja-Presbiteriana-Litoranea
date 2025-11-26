import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { LinkComponent } from "../../components/link-component/link-component";
import { FooterComponent } from "../../components/footer-component/footer-component";

@Component({
  selector: 'app-hinos',
  imports: [Header, LinkComponent, FooterComponent],
  templateUrl: './hinos.html',
  styleUrl: './hinos.css',
})
export class Hinos {

}
