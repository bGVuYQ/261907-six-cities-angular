import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Offers } from './mocks/offer';
import { MainComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public offersCount = Offers.Count;
  public offersPerPage = Offers.PerPage;
}
