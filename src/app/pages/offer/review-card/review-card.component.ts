import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MAX_RATING } from '../../../../const';
import { Review } from '../../../types/review';

@Component({
  selector: 'app-review-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css'
})

export class ReviewCardComponent {
  public review = input.required<Review>();

  applyRatingStyle(rating: number) {
    return `width: ${100 / MAX_RATING * Math.round(rating)}%`;
  }

  formatDate(date: string) {
    return new Date(date).toLocaleString(
      'en-US',
      {
        month: 'long',
        year: 'numeric'
      }
    );
  }
}
