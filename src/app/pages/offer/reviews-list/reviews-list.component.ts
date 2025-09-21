import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Review } from '../../../types/review';
import { ReviewCardComponent } from '../review-card/review-card.component';

@Component({
  selector: 'app-reviews-list',
  imports: [ReviewCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reviews-list.component.html',
  styleUrl: './reviews-list.component.css'
})

export class ReviewsListComponent {
  public reviews = input.required<Review[]>();
}
