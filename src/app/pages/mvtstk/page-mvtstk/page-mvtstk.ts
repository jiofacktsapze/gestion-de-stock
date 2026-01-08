import{CommonModule}from'@angular/common';
import { Component } from '@angular/core';
import { DetailMvtStkArticle } from '../../../composants/detail-mvt-stk-article/detail-mvt-stk-article';
import { Pagination } from '../../../composants/pagination/pagination';
import { BoutonAction } from '../../../composants/bouton-action/bouton-action';
import { DetailMvtStk } from '../../../composants/detail-mvt-stk/detail-mvt-stk';


@Component({
  selector: 'app-page-mvtstk',
  standalone: true,
  imports: [CommonModule, DetailMvtStkArticle, Pagination, BoutonAction, DetailMvtStk],
  templateUrl: './page-mvtstk.html',
  styleUrl: './page-mvtstk.scss',
})
export class PageMvtstk {

}
