import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from "../../components/header/header";
import { CardsComponent } from "../../components/cards-component/cards-component";
import { FooterComponent } from '../../components/footer-component/footer-component';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-home',
  imports: [Header, CardsComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titulo = '';
  resumo = '';
  private router = inject(Router);
  private articleService = inject(ArticleService);

  constructor() {
    const article = this.articleService.getArticle();
    this.titulo = article.titulo || 'Artigo recente';
    this.resumo = article.texto ? article.texto.slice(0, 120) + (article.texto.length > 120 ? '...' : '') : 'Escreva o texto do artigo no código para aparecer aqui.';
  }

  goToArticles(): void {
    this.router.navigate(['/artigos']);
  }
}
