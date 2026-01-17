import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  imports: [],
  templateUrl: './page-profil.html',
  styleUrl: './page-profil.scss',
})
export class PageProfil implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  modifierMotDePasse(): void {
    this.router.navigate(['/changer-mot-de-passe']);
  }
}