import { Routes } from '@angular/router';
import { PageLogin } from './pages/page-login/page-login';
import { PageInscription } from './pages/page-inscription/page-inscription';
import { PageDashboard } from './pages/page-dashboard/page-dashboard';
import { PageStatistiques } from './pages/page-statistiques/page-statistiques';
import { PageArticle } from './pages/articles/page-article/page-article';
import { NouvelArticle } from './pages/articles/nouvel-article/nouvel-article';
import { PageMvtstk } from './pages/mvtstk/page-mvtstk/page-mvtstk';
import { PageClient } from './pages/client/page-client/page-client';
import { PageFournisseur } from './pages/fournisseur/page-fournisseur/page-fournisseur';
import { NouveauCltFrs } from './composants/nouveau-clt-frs/nouveau-clt-frs';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: PageLogin },
  { path: 'inscrire', component: PageInscription },
  { path: '', 
    component: PageDashboard,
    children: [
      { 
        path: 'statistiques',
        component: PageStatistiques
      },
      {
        path: 'articles',
        component: PageArticle
      },
      {
        path: 'nouvel-article',
        component: NouvelArticle
      },
      {
        path: 'mvt-stock',
        component: PageMvtstk
      },
      {
        path: 'clients',
        component: PageClient
      },
      {
        path: 'nouveau-client',
        component: NouveauCltFrs
      },
      {
        path: 'fournisseurs',
        component: PageFournisseur
      },
      {
        path: 'nouveau-fournisseur',
        component: NouveauCltFrs
      }
    ]
  }
]