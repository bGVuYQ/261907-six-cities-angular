import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardClass } from '../../../const';
import { OfferCardComponent } from '../offer-card/offer-card.component';

@Component({
  selector: 'app-offers-list',
  imports: [OfferCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css'
})

export class OffersListComponent {
  public offersPerPage = input<number>();
  public className = input<CardClass>();

  get offers() {
    return Array.from(Array(this.offersPerPage()).keys());
  }
}
