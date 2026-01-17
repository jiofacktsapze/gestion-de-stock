import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BoutonAction } from '../../composants/bouton-action/bouton-action';
import { DetailCmd } from '../../composants/detail-cmd/detail-cmd';
import { DetailCmdCltFrs } from '../../composants/detail-cmd-clt-frs/detail-cmd-clt-frs';
import { Pagination } from '../../composants/pagination/pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { PageCmdRouteData } from './models/page-cmd-route-data.model';

@Component({
  selector: 'app-page-cmd-clt-frs',
  imports: [CommonModule, DetailCmd, DetailCmdCltFrs, BoutonAction, Pagination],
  templateUrl: './page-cmd-clt-frs.html',
  styleUrl: './page-cmd-clt-frs.scss',
})

export class PageCmdCltFrs implements OnInit {

  origin = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data as PageCmdRouteData;
    this.origin = data.origin;
  }

  nouvelleCommande(): void {
    if (this.origin === 'client') {
      this.router.navigate(['/nouvelle-commandeclt']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['/nouvelle-commandefrs']);
    }
    
  }

}

