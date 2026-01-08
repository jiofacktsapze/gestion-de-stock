import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailsCltFrs } from '../../../composants/details-clt-frs/details-clt-frs';
import { Pagination } from '../../../composants/pagination/pagination';
import { BoutonAction } from '../../../composants/bouton-action/bouton-action';

@Component({
  selector: 'app-page-client',
  imports: [CommonModule, DetailsCltFrs, Pagination, BoutonAction],
  templateUrl: './page-client.html',
  styleUrl: './page-client.scss',
})
export class PageClient {

}
