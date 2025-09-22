import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { MAX_IMAGES_TO_RENDER_IN_OFFER, MAX_REVIEWS_TO_RENDER, BookMarkButtonClass, CardClass, MapClass, MAX_NEAR_PLACES_TO_RENDER } from '../../../const';
import { ApplyRatingStylePipe } from '../../pipes/apply-rating-style.pipe';
import { offers } from '../../mocks/offers';
import { reviews } from '../../mocks/reviews';
import { HeaderComponent } from '../../common/header/header.component';
import { BookmarkButtonComponent } from '../../common/bookmark-button/bookmark-button.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { MapComponent } from '../../common/map/map.component';
import { OffersListComponent } from '../../common/offers-list/offers-list.component';

@Component({
  selector: 'app-offer',
  imports: [ApplyRatingStylePipe, TitleCasePipe, HeaderComponent, BookmarkButtonComponent, ReviewsListComponent, CommentFormComponent, MapComponent, OffersListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})

export class OfferComponent {
  public bookmarkClass = BookMarkButtonClass.Offer;
  public mapClass = MapClass.Offer;
  public className = CardClass.NearPlaces;
  public offers = offers.slice(0, MAX_NEAR_PLACES_TO_RENDER);
  public reviews = reviews.slice(0, MAX_REVIEWS_TO_RENDER);
  public currentOffer;
  public images;

  private route = inject(ActivatedRoute);

  constructor() {
    this.currentOffer = offers.find((it) => it.id === this.route.snapshot.params['id']);

    if (this.currentOffer) {
      this.images = this.currentOffer?.images.slice(0, MAX_IMAGES_TO_RENDER_IN_OFFER);
    }
  }
}
