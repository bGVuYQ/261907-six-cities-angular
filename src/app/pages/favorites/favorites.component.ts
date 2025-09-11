import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute, CITIES } from '../../../const';
import { HeaderComponent } from '../../common/header/header.component';
import { FavoriteLocationComponent } from './favorite-location/favorite-location.component';

@Component({
  selector: 'app-favorites',
  imports: [HeaderComponent, FavoriteLocationComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})

export class FavoritesComponent {
  public cities = CITIES;
  public routeToMain = AppRoute.Main;
}
