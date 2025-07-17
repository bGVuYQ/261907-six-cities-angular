import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Offers } from '../mocks/offer';
import { MainScreenComponent } from './main-screen/main-screen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  offersCount = Offers.Count;
  offersPerPage = Offers.PerPage;
}
