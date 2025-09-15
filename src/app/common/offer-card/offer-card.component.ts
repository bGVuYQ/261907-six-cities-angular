import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MAX_RATING, AppRoute, BookMarkButtonClass, CardClass } from '../../../const';
import { Offer } from '../../types/offer';
import { BookmarkButtonComponent } from '../bookmark-button/bookmark-button.component';

@Component({
  selector: 'app-offer-card',
  imports: [RouterLink, BookmarkButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})

export class OfferCardComponent {
  public offer = input.required<Offer>();
  public className = input.required<CardClass>();
  public routeToOffer = `/${AppRoute.Offer}`;
  public bookmarkClass = BookMarkButtonClass.PlaceCard;

  get sizes() {
    return {
      width: this.isFavorite() ? 150 : 260,
      heigth: this.isFavorite() ? 110 : 200
    }
  }

  applyRatingStyle(rating: number) {
    return `width: ${100 / MAX_RATING * Math.round(rating)}%`;
  }

  capitalize(word: string) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
  }

  isFavorite() {
    return this.className() === CardClass.Favorites;
  }
}
