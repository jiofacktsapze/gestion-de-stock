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
import { PageCmdCltFrs } from './pages/page-cmd-clt-frs/page-cmd-clt-frs';
import { NouvelleCmdCltFrs } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs';
import { PageCategories } from './pages/categories/page-categories/page-categories';
import { NouvelleCategory } from './pages/categories/nouvelle-category/nouvelle-category';
import { PageUtilisateur } from './pages/utilisateur/page-utilisateur/page-utilisateur';
import { NouvelUtilisateur } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur';
import { PageProfil } from './pages/profil/page-profil/page-profil';
import { ChangerMotDePasse } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe';

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
        component: NouveauCltFrs,
        data: {
          origin: 'client'
        }
      },
      {
        path: 'commandesclient',
        component: PageCmdCltFrs,
        data: {
          origin: 'client'
        }
      },
      {
        path: 'nouvelle-commandeclt',
        component: NouvelleCmdCltFrs,
        data: {
          origin: 'client'
        }
      },
      {
        path: 'fournisseurs',
        component: PageFournisseur
      },
      {
        path: 'nouveau-fournisseur',
        component: NouveauCltFrs,
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'commandesfournisseur',
        component: PageCmdCltFrs,
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'nouvelle-commandefrs',
        component: NouvelleCmdCltFrs,
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'categories',
        component: PageCategories
      },
      {
        path: 'nouvelle-categorie',
        component: NouvelleCategory
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateur
      },
      {
        path: 'nouvel-utilisateur',
        component: NouvelUtilisateur
      },
      {
        path: 'profil',
        component: PageProfil
      },
      {
        path: 'changer-mot-de-passe',
        component: ChangerMotDePasse
      }
    ]
  }
]