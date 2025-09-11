import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MAX_RATING, Rating } from '../../../../const';

@Component({
  selector: 'app-comment-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})

export class CommentFormComponent {
  public rating = Object.values(Rating);
  public maxRating = MAX_RATING;
}
