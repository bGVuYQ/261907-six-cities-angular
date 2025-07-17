import { Component, input } from '@angular/core';
import { OfferCardComponent } from '../offer-card/offer-card.component';

@Component({
  selector: 'app-main-screen',
  imports: [OfferCardComponent],
  templateUrl: './main-screen.component.html'
})

export class MainScreenComponent {
  offersCount = input<number>();
  offersPerPage = input<number>();

  get offers() {
    return Array.from(Array(this.offersPerPage()).keys());
  }
}
