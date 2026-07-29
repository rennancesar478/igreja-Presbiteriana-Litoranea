import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { FooterComponent } from '../../components/footer-component/footer-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface BibleApiResponse {
  reference?: string;
  text?: string;
  verses?: Array<{ verse?: number; text?: string }>;
}

@Component({
  selector: 'app-biblia',
  imports: [Header, FooterComponent, CommonModule, FormsModule],
  templateUrl: './biblia.html',
  styleUrl: './biblia.css',
})
export class Biblia {
  selectedBook = 'Gênesis';
  selectedChapter = 1;
  selectedVerse = 1;
  chapterText: Array<{ verse: number; text: string }> = [];
  chapterReference = '';

  books = [
    'Gênesis',
    'Êxodo',
    'Levítico',
    'Números',
    'Deuteronômio',
    'Josué',
    'Juízes',
    'Rute',
    '1 Samuel',
    '2 Samuel',
    '1 Reis',
    '2 Reis',
    '1 Crônicas',
    '2 Crônicas',
    'Esdras',
    'Neemias',
    'Ester',
    'Jó',
    'Salmos',
    'Provérbios',
    'Eclesiastes',
    'Cânticos',
    'Isaías',
    'Jeremias',
    'Lamentações',
    'Ezequiel',
    'Daniel',
    'Oséias',
    'Joel',
    'Amós',
    'Obadias',
    'Jonas',
    'Miqueias',
    'Naum',
    'Habacuque',
    'Sofonias',
    'Ageu',
    'Zacarias',
    'Malaquias',
    'Mateus',
    'Marcos',
    'Lucas',
    'João',
    'Atos',
    'Romanos',
    '1 Coríntios',
    '2 Coríntios',
    'Galatas',
    'Efésios',
    'Filipenses',
    'Colossenses',
    '1 Tessalonicenses',
    '2 Tessalonicenses',
    '1 Timóteo',
    '2 Timóteo',
    'Tito',
    'Filêmon',
    'Hebreus',
    'Tiago',
    '1 Pedro',
    '2 Pedro',
    '1 João',
    '2 João',
    '3 João',
    'Judas',
    'Apocalipse'
  ];

  chapters: Record<string, number> = {
    'Gênesis': 50,
    'Êxodo': 40,
    'Levítico': 27,
    'Números': 36,
    'Deuteronômio': 34,
    'Josué': 24,
    'Juízes': 21,
    'Rute': 4,
    '1 Samuel': 31,
    '2 Samuel': 24,
    '1 Reis': 22,
    '2 Reis': 25,
    '1 Crônicas': 29,
    '2 Crônicas': 36,
    'Esdras': 10,
    'Neemias': 13,
    'Ester': 10,
    'Jó': 42,
    'Salmos': 150,
    'Provérbios': 31,
    'Eclesiastes': 12,
    'Cânticos': 8,
    'Isaías': 66,
    'Jeremias': 52,
    'Lamentações': 5,
    'Ezequiel': 48,
    'Daniel': 12,
    'Oséias': 14,
    'Joel': 3,
    'Amós': 9,
    'Obadias': 1,
    'Jonas': 4,
    'Miqueias': 7,
    'Naum': 3,
    'Habacuque': 3,
    'Sofonias': 3,
    'Ageu': 2,
    'Zacarias': 14,
    'Malaquias': 4,
    'Mateus': 28,
    'Marcos': 16,
    'Lucas': 24,
    'João': 21,
    'Atos': 28,
    'Romanos': 16,
    '1 Coríntios': 16,
    '2 Coríntios': 13,
    'Galatas': 6,
    'Efésios': 6,
    'Filipenses': 4,
    'Colossenses': 4,
    '1 Tessalonicenses': 5,
    '2 Tessalonicenses': 3,
    '1 Timóteo': 6,
    '2 Timóteo': 4,
    'Tito': 3,
    'Filêmon': 1,
    'Hebreus': 13,
    'Tiago': 5,
    '1 Pedro': 5,
    '2 Pedro': 3,
    '1 João': 5,
    '2 João': 1,
    '3 João': 1,
    'Judas': 1,
    'Apocalipse': 22
  };

  verses: Record<string, number> = {
    'Gênesis': 31,
    'Êxodo': 20,
    'Levítico': 8,
    'Números': 18,
    'Deuteronômio': 12,
    'Josué': 18,
    'Juízes': 25,
    'Rute': 22,
    '1 Samuel': 28,
    '2 Samuel': 24,
    '1 Reis': 17,
    '2 Reis': 25,
    '1 Crônicas': 17,
    '2 Crônicas': 18,
    'Esdras': 15,
    'Neemias': 11,
    'Ester': 17,
    'Jó': 35,
    'Salmos': 12,
    'Provérbios': 35,
    'Eclesiastes': 18,
    'Cânticos': 17,
    'Isaías': 20,
    'Jeremias': 19,
    'Lamentações': 22,
    'Ezequiel': 25,
    'Daniel': 21,
    'Oséias': 11,
    'Joel': 20,
    'Amós': 15,
    'Obadias': 21,
    'Jonas': 17,
    'Miqueias': 16,
    'Naum': 15,
    'Habacuque': 17,
    'Sofonias': 18,
    'Ageu': 14,
    'Zacarias': 14,
    'Malaquias': 14,
    'Mateus': 16,
    'Marcos': 20,
    'Lucas': 18,
    'João': 8,
    'Atos': 20,
    'Romanos': 16,
    '1 Coríntios': 16,
    '2 Coríntios': 12,
    'Galatas': 14,
    'Efésios': 14,
    'Filipenses': 20,
    'Colossenses': 16,
    '1 Tessalonicenses': 12,
    '2 Tessalonicenses': 12,
    '1 Timóteo': 15,
    '2 Timóteo': 17,
    '3 João': 15,
    'Judas': 25,
    'Apocalipse': 11
  };

  verseText = '';
  isLoading = false;

  constructor() {
    this.updateVerseText();
  }

  selectBook(book: string): void {
    this.selectedBook = book;
    this.selectedChapter = 1;
    this.selectedVerse = 1;
    this.updateVerseText();
  }

  selectChapter(chapter: number): void {
    this.selectedChapter = chapter;
    this.selectedVerse = 1;
    this.updateVerseText();
  }

  selectVerse(verse: number): void {
    this.selectedVerse = verse;
    this.updateVerseText();
  }

  async updateVerseText(): Promise<void> {
    this.isLoading = true;
    const key = `${this.selectedBook} ${this.selectedChapter}`;

    try {
      const response = await fetch(`https://bible-api.com/${encodeURIComponent(this.selectedBook)}%20${this.selectedChapter}?translation=almeida`);
      const data = (await response.json()) as BibleApiResponse;
      this.chapterReference = data.reference || key;
      this.chapterText = (data.verses || []).map((item) => ({
        verse: item.verse || 0,
        text: item.text?.trim() || ''
      })).filter((item) => item.text.length > 0);
      this.verseText = this.chapterText[0]?.text || data.text?.trim() || `Texto ainda não disponível para ${key}.`;
    } catch {
      this.verseText = `Texto ainda não disponível para ${key}.`;
      this.chapterText = [];
      this.chapterReference = key;
    } finally {
      this.isLoading = false;
    }
  }
}
