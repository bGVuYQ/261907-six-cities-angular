import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-review-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css'
})

export class ReviewCardComponent {}
