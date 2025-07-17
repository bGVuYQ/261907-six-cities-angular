import { Component, input } from '@angular/core';
import { OfferCardComponent } from '../../common/offer-card/offer-card.component';

@Component({
  selector: 'app-main',
  imports: [OfferCardComponent],
  templateUrl: './main.component.html'
})

export class MainComponent {
  offersCount = input<number>();
  offersPerPage = input<number>();

  get offers() {
    return Array.from(Array(this.offersPerPage()).keys());
  }
}
