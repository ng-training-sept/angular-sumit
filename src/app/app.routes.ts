import { SportsComponent } from "./forms/sports/sports.component";
import { RouterModule, Routes } from "@angular/router";
import { Route } from "@angular/router";
import { CardItemComponent } from "./components/card3/card-item/card-item.component";
import { GroceryComponent } from "./forms/grocery/grocery.component";
import { HomeComponent } from "./forms/home/home.component";
import { PageNotFoundComponent } from "./forms/page-not-found/page-not-found.component";
import { authGuard } from "./auth/auth.constants";

export const routes: Routes = [
    // { path: '', redirectTo: 'sports', pathMatch: 'full' },
    // { path: 'sports', component: SportsComponent }, // Eagerly loading route
    // { path: 'grocery', component: GroceryComponent }

    // Lazy loading
    // { path: 'sports', loadComponent: () => import('./forms/sports/sports.component').then(m => m.SportsComponent)}, 
    // {path: 'grocery', loadComponent: () => import('./forms/grocery/grocery.component').then(m => m.GroceryComponent)}

    // { path: 'sports/card-item/:id', component: CardItemComponent},


    { path: '', loadComponent: () => import('./forms/home/home.component').then(m => m.HomeComponent) },

    // { path: 'sports', loadChildren: () => import('./forms/sports/sports.routes').then(m => m.routes) },
    // { path: 'grocery', loadChildren: () => import('./forms/grocery/grocery.routes').then(m => m.routes) },

    {
      path: 'sports',
      canActivate: [authGuard],
      loadChildren: () => import('./forms/sports/sports.routes').then(m => m.routes)
    },

    {
      path: 'grocery',
      canActivate: [authGuard],
      loadChildren: () => import('./forms/grocery/grocery.routes').then(m => m.routes)
    },

    { path: '**', component: PageNotFoundComponent }

    
];
