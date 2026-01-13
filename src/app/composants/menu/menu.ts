import { Component, OnInit } from '@angular/core';
import { SideMenu } from './side-menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'],
  standalone: true
})
export class Menu implements OnInit {
  public menuProperties: Array<SideMenu> = [{
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fa-solid fa-chart-line',
    url: '',
    sousMenu: [
      {
      id: '11',
      titre: 'Vue d\'ensemble',
      icon: 'fa-solid fa-globe',
      url: '',
      },
      {
      id: '12',
      titre: 'Statistiques',
      icon: 'fa-solid fa-chart-column',
      url: 'statistiques',
      }
    ]
  },
  {
    id: '2',
    titre: 'Articles',
    icon: 'fa-solid fa-boxes-stacked',
    url: '',
    sousMenu: [
      {
      id: '21',
      titre: 'Articles',
      icon: 'fa-solid fa-cart-shopping',
      url: 'articles',
      },
      {
      id: '22',
      titre: 'Mouvement du stock',
      icon: 'fa-solid fa-arrow-right-arrow-left',
      url: 'mvt-stock',
      }
    ]
  },
  {
    id: '3',
    titre: 'Clients',
    icon: 'fa-solid fa-people-group',
    url: '',
    sousMenu: [
      {
      id: '31',
      titre: 'Clients',
      icon: 'fa-solid fa-list-check',
      url: 'clients',
      },
      {
      id: '32',
      titre: 'Commandes clients',
      icon: 'fa-solid fa-cart-arrow-down',
      url: 'commandesclient',
      }
    ]
  },
  {
    id: '4',
    titre: 'Fournisseurs',
    icon: 'fa-brands fa-stack-overflow',
    url: '',
    sousMenu: [
      {
      id: '41',
      titre: 'Fournisseurs',
      icon: 'fa-solid fa-cart-flatbed',
      url: 'fournisseurs',
      },
      {
      id: '42',
      titre: 'Commandes fournisseurs',
      icon: 'fa-solid fa-dolly',
      url: 'commandesfournisseur',
      }
    ]
  },
    {
    id: '5',
    titre: 'Paramétrages',
    icon: 'fa-solid fa-screwdriver-wrench',
    url: '',
    sousMenu: [
      {
      id: '51',
      titre: 'Catégories',
      icon: 'fa-solid fa-id-badge',
      url: '',
      },
      {
      id: '52',
      titre: 'Utilisateurs',
      icon: 'fa-solid fa-user',
      url: '',
      }
    ]
  }
];
  
  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
  }

  navigate(url?: string): void {
    this.router.navigate([url]);
  }
}
