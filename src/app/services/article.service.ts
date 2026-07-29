import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private article = {
    titulo: 'Artigo recente',
    texto: 'Escreva o texto do artigo no código para aparecer aqui.',
  };

  getArticle() {
    return this.article;
  }

  setArticle(titulo: string, texto: string): void {
    this.article = { titulo, texto };
  }
}
