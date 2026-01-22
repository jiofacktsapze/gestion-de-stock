import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-article',
  imports: [],
  templateUrl: './nouvel-article.html',
  styleUrl: './nouvel-article.scss',
})
export class NouvelArticle implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  cancel(): void{
    this.router.navigate(['/articles']);
  }
}

