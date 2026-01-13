import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BoutonAction } from '../../composants/bouton-action/bouton-action';
import { DetailCmd } from '../../composants/detail-cmd/detail-cmd';
import { DetailCmdCltFrs } from '../../composants/detail-cmd-clt-frs/detail-cmd-clt-frs';
import { Pagination } from '../../composants/pagination/pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  imports: [CommonModule, DetailCmd, DetailCmdCltFrs, BoutonAction, Pagination],
  templateUrl: './page-cmd-clt-frs.html',
  styleUrl: './page-cmd-clt-frs.scss',
})
export class PageCmdCltFrs implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  nouvelleCommande(): void {
    this.router.navigate(['/nouvelle-commandeclt']);
  }

}

