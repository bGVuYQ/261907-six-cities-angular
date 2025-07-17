import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Offers } from './mocks/offer';
import { MainComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  offersCount = Offers.Count;
  offersPerPage = Offers.PerPage;
}
