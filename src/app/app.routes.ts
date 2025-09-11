import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { AppRoute } from '../const';
import { isAuthorized } from './mocks/user';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { OfferComponent } from './pages/offer/offer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const canActivateFavorites: CanActivateFn = () => {
  if (!isAuthorized) {
    const router = inject(Router);

    router.navigate([AppRoute.Login]);

    return false;
  }

  return true;
};

export const routes: Routes = [
  {
    path: AppRoute.Main,
    component: MainComponent
  },
  {
    path: AppRoute.Login,
    component: LoginComponent
  },
  {
    path: AppRoute.Favorites,
    component: FavoritesComponent,
    canActivate: [canActivateFavorites]
  },
  {
    path: `${AppRoute.Offer}/:id`,
    component: OfferComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
