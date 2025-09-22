import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Review } from '../../../types/review';
import { ApplyRatingStylePipe } from '../../../pipes/apply-rating-style.pipe';

@Component({
  selector: 'app-review-card',
  imports: [DatePipe, ApplyRatingStylePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css'
})

export class ReviewCardComponent {
  public review = input.required<Review>();
}
