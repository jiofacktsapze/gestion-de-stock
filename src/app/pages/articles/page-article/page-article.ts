import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailArticle } from '../../../composants/detail-article/detail-article';
import { Pagination } from '../../../composants/pagination/pagination';
import { BoutonAction } from '../../../composants/bouton-action/bouton-action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [CommonModule, DetailArticle, Pagination, BoutonAction],
  templateUrl: './page-article.html',
  styleUrl: './page-article.scss',
})
export class PageArticle implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  nouvelArticle(): void {
    this.router.navigate(['/nouvel-article']);
  }
}
