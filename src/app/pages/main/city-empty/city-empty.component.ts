import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-city-offers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './city-empty.component.html',
  styleUrl: './city-empty.component.css'
})

export class CityOffersComponent {}
