import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { CITIES } from '../../../const';
import { HeaderComponent } from '../../common/header/header.component';
import { LinkToCityComponent } from '../../common/link-to-city/link-to-city.component';

@Component({
  selector: 'app-not-found',
  imports: [HeaderComponent, LinkToCityComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})

export class NotFoundComponent {
  public city = CITIES[faker.number.int(CITIES.length - 1)];
}
