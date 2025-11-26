import { Component, Input } from '@angular/core';
import { Header } from '../../components/header/header';
import { FooterComponent } from '../../components/footer-component/footer-component';

@Component({
  selector: 'app-sobre',
  imports: [Header, FooterComponent],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {
  @Input() about: string =
    'IPAB Esta igreja é afiliada ao Presbitério Central da Paraíba e ao Sínodo da Paraíba, concíliosregionais. A IPAB é uma comunidade Cristã Reformada federada a Igreja Presbiteriana do Brasil.    Assim sendo, adotamos a Bíblia como nossa única regra de fé e prática e a Confissão de Fé de    Westminster, bem como seus catecismo Maior e Breve, como fiel exposição do sistema de doutrina    da Escritura.';
}
