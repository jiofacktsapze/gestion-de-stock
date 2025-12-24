import { Routes } from '@angular/router';
import { PageLogin } from './pages/page-login/page-login';
import { PageInscription } from './pages/page-inscription/page-inscription';
import { PageDashboard } from './pages/page-dashboard/page-dashboard';
import { PageStatistiques } from './pages/page-statistiques/page-statistiques';
import { PageArticle } from './pages/articles/page-article/page-article';

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
      }
    ]
  }
]