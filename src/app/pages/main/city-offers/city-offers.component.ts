import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CardClass } from '../../../../const';
import { Offer } from '../../../types/offer';
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
  public offers = input.required<Offer[]>();
  public className = input.required<CardClass>();

  readonly highlightMapEvent = output<string>();
  readonly resetMapEvent = output<void>();

  highlightMap(offerId: string) {
    this.highlightMapEvent.emit(offerId);
  }

  resetMap() {
    this.resetMapEvent.emit();
  }
}
