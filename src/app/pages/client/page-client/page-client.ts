import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailsCltFrs } from '../../../composants/details-clt-frs/details-clt-frs';
import { Pagination } from '../../../composants/pagination/pagination';
import { BoutonAction } from '../../../composants/bouton-action/bouton-action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-client',
  imports: [CommonModule, DetailsCltFrs, Pagination, BoutonAction],
  templateUrl: './page-client.html',
  styleUrl: './page-client.scss',
})
export class PageClient implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  nouveauClient(): void {
    this.router.navigate(['/nouveau-client']);
  }
}
