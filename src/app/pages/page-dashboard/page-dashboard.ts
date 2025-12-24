import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../../composants/menu/menu';
import { Header } from '../../composants/header/header';
import { DetailArticle } from '../../composants/detail-article/detail-article';

@Component({
  selector: 'app-page-dashboard',
  standalone: true,
  imports: [RouterOutlet, Menu, Header],
  templateUrl: './page-dashboard.html',
  styleUrls: ['./page-dashboard.scss'],
})
export class PageDashboard {

}
