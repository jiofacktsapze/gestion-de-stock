import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-utilisateur',
  imports: [],
  templateUrl: './nouvel-utilisateur.html',
  styleUrl: './nouvel-utilisateur.scss',
})
export class NouvelUtilisateur implements OnInit{
constructor(
  private router: Router
){}

ngOnInit(): void {}

cancel(): void{
  this.router.navigate(['/utilisateurs']);
}
}
