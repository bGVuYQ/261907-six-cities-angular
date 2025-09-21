import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardClass } from '../../../../const';
import { offers } from '../../../mocks/offers';
import { LinkToCityComponent } from '../../../common/link-to-city/link-to-city.component';
import { OfferCardComponent } from '../../../common/offer-card/offer-card.component';

@Component({
  selector: 'app-favorite-location',
  imports: [LinkToCityComponent, OfferCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './favorite-location.component.html',
  styleUrl: './favorite-location.component.css'
})

export class FavoriteLocationComponent {
  public city = input.required<string>();
  public offers = offers;
  public className = CardClass.Favorites;
}
