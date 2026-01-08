import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailArticle } from '../../../composants/detail-article/detail-article';
import { Pagination } from '../../../composants/pagination/pagination';
import { BoutonAction } from '../../../composants/bouton-action/bouton-action';

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [CommonModule, DetailArticle, Pagination, BoutonAction],
  templateUrl: './page-article.html',
  styleUrl: './page-article.scss',
})
export class PageArticle {

}
