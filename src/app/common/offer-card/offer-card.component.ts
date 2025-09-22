import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { AppRoute, BookMarkButtonClass, CardClass } from '../../../const';
import { Offer } from '../../types/offer';
import { ApplyRatingStylePipe } from '../../pipes/apply-rating-style.pipe';
import { BookmarkButtonComponent } from '../bookmark-button/bookmark-button.component';

@Component({
  selector: 'app-offer-card',
  imports: [ApplyRatingStylePipe, RouterLink, BookmarkButtonComponent, TitleCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})

export class OfferCardComponent {
  public offer = input.required<Offer>();
  public className = input.required<CardClass>();
  public routeToOffer = `/${AppRoute.Offer}`;
  public bookmarkClass = BookMarkButtonClass.PlaceCard;

  readonly highlightMapEvent = output<string>();
  readonly resetMapEvent = output<void>();

  get sizes() {
    return {
      width: this.isFavorite() ? 150 : 260,
      height: this.isFavorite() ? 110 : 200
    }
  }

  highlightMap() {
    this.highlightMapEvent.emit(this.offer().id);
  }

  isFavorite() {
    return this.className() === CardClass.Favorites;
  }

  resetMap() {
    this.resetMapEvent.emit();
  }
}
