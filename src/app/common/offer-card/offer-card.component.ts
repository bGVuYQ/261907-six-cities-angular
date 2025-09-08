import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BookMarkButtonClass, CardClass } from '../../../const';
import { BookmarkButtonComponent } from '../bookmark-button/bookmark-button.component';

@Component({
  selector: 'app-offer-card',
  imports: [BookmarkButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})

export class OfferCardComponent {
  public className = input<CardClass>();
  public imageWidth = this.className() !== CardClass.Favorites ? 260 : 150;
  public imageHeight = this.className() !== CardClass.Favorites ? 200 : 100;
  public bookmarkClass = BookMarkButtonClass.PlaceCard;
}
