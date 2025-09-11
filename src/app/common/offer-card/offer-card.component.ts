import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute, BookMarkButtonClass, CardClass } from '../../../const';
import { BookmarkButtonComponent } from '../bookmark-button/bookmark-button.component';

@Component({
  selector: 'app-offer-card',
  imports: [RouterLink, BookmarkButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})

export class OfferCardComponent {
  public routeToOffer = AppRoute.Offer;
  public className = input<CardClass>();
  public bookmarkClass = BookMarkButtonClass.PlaceCard;

  get sizes() {
    return {
      width: this.isFavorite() ? 150 : 260,
      heigth: this.isFavorite() ? 110 : 200
    }
  }

  isFavorite() {
    return this.className() === CardClass.Favorites;
  }
}
