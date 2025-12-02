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
      link: 'https://www.youtube.com/embed/k2Ax7oceOQk?si',
      content: 'Exposição Bíblica Gênesis 29:1-8 - Rev Aldenor Pacifico'
    },
    {
      link: 'https://www.youtube.com/embed/V--tCcdjujI?si',
      content: 'Exposição Bíblica em Gênesis 29:9-30 - Rev Aldenor Pacifico'
    },
    {
      link: 'https://www.youtube.com/embed/VlqCTAPbBiE?si',
      content: 'Exposição Bíblica em Gênesis 29: 31-35 - Rev Aldenor Pacifico'
    },
    {
      link: 'https://www.youtube.com/embed/1_fcK6m8dcE?si',
      content: 'Exposição Bíblica em Gênesis 30:1-24 - Rev Aldenor Pacífico'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getSafeLink(link: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
}
