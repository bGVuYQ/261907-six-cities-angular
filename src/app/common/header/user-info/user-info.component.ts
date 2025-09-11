import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '../../../../const';

@Component({
  selector: 'app-user-info',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})

export class UserInfoComponent {
  public routeToFavorites = AppRoute.Favorites;
}
