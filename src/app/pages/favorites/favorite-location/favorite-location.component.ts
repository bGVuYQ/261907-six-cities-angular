import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardClass } from '../../../../const';
import { Offers } from '../../../mocks/offer';
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
  public city = input<string>();
  public offersPerPage = Offers.PerPage;
  public className = CardClass.Favorites;

  get offers() {
    return Array.from(Array(this.offersPerPage).keys());
  }
}
