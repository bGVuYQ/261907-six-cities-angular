import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { MAX_IMAGES_TO_RENDER_IN_OFFER, MAX_REVIEWS_TO_RENDER, BookMarkButtonClass, CardClass, MapClass } from '../../../const';
import { offers } from '../../mocks/offers';
import { HeaderComponent } from '../../common/header/header.component';
import { BookmarkButtonComponent } from '../../common/bookmark-button/bookmark-button.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { MapComponent } from '../../common/map/map.component';
import { OffersListComponent } from '../../common/offers-list/offers-list.component';

@Component({
  selector: 'app-offer',
  imports: [HeaderComponent, BookmarkButtonComponent, ReviewsListComponent, CommentFormComponent, MapComponent, OffersListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})

export class OfferComponent {
  public bookmarkClass = BookMarkButtonClass.Offer;
  public mapClass = MapClass.Offer;
  public className = CardClass.NearPlaces;
  public offers = offers;

  get goods() {
    return Array.from(Array(faker.number.int(10)).keys());
  }

  get images() {
    return Array.from(Array(MAX_IMAGES_TO_RENDER_IN_OFFER).keys());
  }

  get reviews() {
    return Array.from(Array(MAX_REVIEWS_TO_RENDER).keys());
  }
}
