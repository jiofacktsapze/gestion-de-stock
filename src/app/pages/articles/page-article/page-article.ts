import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailArticle } from '../../../composants/detail-article/detail-article';

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [CommonModule, DetailArticle],
  templateUrl: './page-article.html',
  styleUrl: './page-article.scss',
})
export class PageArticle {

}
