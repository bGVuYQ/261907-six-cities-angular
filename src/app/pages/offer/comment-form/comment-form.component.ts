import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MAX_RATING, Rating } from '../../../../const';

interface Comment {
  comment: string,
  rating: number
};

@Component({
  selector: 'app-comment-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})

export class CommentFormComponent {
  public rating = Object.values(Rating);
  public maxRating = MAX_RATING;

  public state: Comment = {
    comment: '',
    rating: 0
  };

  updateComment(evt: Event) {
    const target: HTMLTextAreaElement = evt.target as HTMLTextAreaElement;

    this.state.comment = target.value;
  }

  updateRating(rating: number) {
    this.state.rating = rating;
  }
}
