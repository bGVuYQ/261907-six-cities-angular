import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BookMarkButtonClass } from '../../../const';

@Component({
  selector: 'app-bookmark-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bookmark-button.component.html',
  styleUrl: './bookmark-button.component.css'
})

export class BookmarkButtonComponent {
  public className = input<BookMarkButtonClass>();
  public bookmarkWidth = this.className() === BookMarkButtonClass.Offer ? 31 : 18;
  public bookmarkHeight = this.className() === BookMarkButtonClass.Offer ? 33 : 19;
}
