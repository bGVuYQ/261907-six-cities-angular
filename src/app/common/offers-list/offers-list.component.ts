import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CardClass } from '../../../const';
import { Offer } from '../../types/offer';
import { OfferCardComponent } from '../offer-card/offer-card.component';

@Component({
  selector: 'app-offers-list',
  imports: [OfferCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css'
})

export class OffersListComponent {
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
