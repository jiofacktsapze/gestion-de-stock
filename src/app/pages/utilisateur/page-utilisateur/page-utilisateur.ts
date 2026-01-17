import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from '../../../composants/pagination/pagination';
import { BoutonAction } from '../../../composants/bouton-action/bouton-action';
import { DetailUtilisateur } from '../../../composants/detail-utilisateur/detail-utilisateur';

@Component({
  selector: 'app-page-utilisateur',
  imports: [Pagination, BoutonAction, DetailUtilisateur],
  templateUrl: './page-utilisateur.html',
  styleUrl: './page-utilisateur.scss',
})
export class PageUtilisateur implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  nouvelUtilisateur(): void {
    this.router.navigate(['/nouvel-utilisateur']);
  }
}
