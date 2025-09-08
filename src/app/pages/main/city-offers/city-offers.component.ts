import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardClass } from '../../../../const';
import { SortComponent } from '../sort/sort.component';
import { OffersListComponent } from '../../../common/offers-list/offers-list.component';

@Component({
  selector: 'app-city-offers',
  imports: [SortComponent, OffersListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './city-offers.component.html',
  styleUrl: './city-offers.component.css'
})

export class CityOffersComponent {
  public offersCount = input<number>();
  public offersPerPage = input<number>();
  public className = input<CardClass>();
}
