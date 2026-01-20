import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mot-de-passe',
  imports: [],
  templateUrl: './changer-mot-de-passe.html',
  styleUrl: './changer-mot-de-passe.scss',
})
export class ChangerMotDePasse implements OnInit{

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['/profil']);
  }
}
