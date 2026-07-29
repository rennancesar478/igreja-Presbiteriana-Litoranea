import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { FooterComponent } from '../../components/footer-component/footer-component';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-artigos',
  imports: [Header, FooterComponent],
  templateUrl: './artigos.html',
  styleUrl: './artigos.css',
})
export class Artigos {
  titulo = '';
  texto = '';
  private articleService = inject(ArticleService);

  constructor() {
    const article = this.articleService.getArticle();
    this.titulo = article.titulo;
    this.texto = article.texto;
  }
}
