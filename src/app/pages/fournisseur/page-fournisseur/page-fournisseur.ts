import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../../composants/pagination/pagination';
import { BoutonAction } from '../../../composants/bouton-action/bouton-action';
import { DetailsCltFrs } from '../../../composants/details-clt-frs/details-clt-frs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-fournisseur',
  imports: [CommonModule, Pagination, BoutonAction, DetailsCltFrs],
  templateUrl: './page-fournisseur.html',
  styleUrl: './page-fournisseur.scss',
})
export class PageFournisseur implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  nouveauFournisseur(): void {
    this.router.navigate(['/nouveau-fournisseur']);
  }
}


