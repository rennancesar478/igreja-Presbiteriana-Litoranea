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
    'A Igreja Presbiteriana Litorânea (IPL) é uma comunidade Cristã Reformada,  Congregação da Igreja Presbiteriana do Alto Branco (IPAB), federada ao Presbitério Central da Paraíba e a Igreja Presbiteriana do Brasil (IPB) A Bíblia é adotada como única regra de fé e prática. Temos a Confissão de Fé de Westminster, bem como seus catecismos Maior e Breve, como fiel exposição do sistema de doutrina e da Sagrada Escritura.'; 


}
