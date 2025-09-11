import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faker } from '@faker-js/faker';
import { AppRoute, CITIES } from '../../../const';
import { HeaderComponent } from '../../common/header/header.component';
import { LinkToCityComponent } from '../../common/link-to-city/link-to-city.component';

@Component({
  selector: 'app-not-found',
  imports: [HeaderComponent, RouterLink, LinkToCityComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})

export class NotFoundComponent {
  public routeToMain = AppRoute.Main;
  public city = CITIES[faker.number.int(CITIES.length - 1)];
}
