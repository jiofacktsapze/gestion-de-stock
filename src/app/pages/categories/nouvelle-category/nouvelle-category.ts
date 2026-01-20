import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-category',
  imports: [],
  templateUrl: './nouvelle-category.html',
  styleUrl: './nouvelle-category.scss',
})
export class NouvelleCategory implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['/categories']);
  }

}
