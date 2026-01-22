import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from '../../../composants/pagination/pagination';
import { BoutonAction } from '../../../composants/bouton-action/bouton-action';

@Component({
  selector: 'app-page-categories',
  imports: [Pagination, BoutonAction],
  templateUrl: './page-categories.html',
  styleUrl: './page-categories.scss',
})
export class PageCategories implements OnInit {
  
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  nouvelleCategory(): void {
    this.router.navigate(['/nouvelle-categorie']);
  }
}
