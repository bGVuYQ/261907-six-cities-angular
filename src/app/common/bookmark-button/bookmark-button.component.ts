import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BookMarkButtonClass } from '../../../const';

@Component({
  selector: 'app-bookmark-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bookmark-button.component.html',
  styleUrl: './bookmark-button.component.css'
})

export class BookmarkButtonComponent {
  public className = input.required<BookMarkButtonClass>();
  public isActive = input.required<boolean>();

  get sizes() {
    return {
      width: this.isOffer() ? 31 : 18,
      height: this.isOffer() ? 33 : 19
    }
  }

  isOffer() {
    return this.className() === BookMarkButtonClass.Offer;
  }
}
