import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Cards {
  link: any;
  content: string;
}

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.html',
  styleUrl: './cards-component.css',
})
export class CardsComponent {
  cards: Cards[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  getSafeLink(link: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
}
