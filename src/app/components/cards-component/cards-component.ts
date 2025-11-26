import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Cards {
  link: any;
  content: string;
}

@Component({
  selector: 'app-cards-component',
  imports: [NgForOf],
  templateUrl: './cards-component.html',
  styleUrl: './cards-component.css',
})
export class CardsComponent {
    cards: Cards[] = [
    {
      link: 'https://www.youtube.com/embed/F5x_KwdeXm8?si=',
      content: 'Exposição Bíblica em Gênesis 31: 15 – Rev Aldenor Pacífico'
    },
    {
      link: 'https://www.youtube.com/embed/LE9_QeIHA80?si=',
      content: 'Sermão Expositivo em Gênesis 31: 1-21 – Rev Aldenor Pacífico'
    },
    {
      link: 'https://www.youtube.com/embed/OnsfWnFAR-oc?si=',
      content: 'Sermão Expositivo em Gênesis 32: 22-32 – Rev Aldenor Pacífico'
    },
    {
      link: 'https://www.youtube.com/embed/Xn4l6KeenELc?si=',
      content: 'Sermão Expositivo em Gênesis 33: 1-17 – Rev Aldenor Pacífico'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getSafeLink(link: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
}
