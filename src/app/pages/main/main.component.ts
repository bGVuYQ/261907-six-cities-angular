import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardClass, MapClass } from '../../../const';
import { HeaderComponent } from '../../common/header/header.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { CityOffersComponent } from './city-offers/city-offers.component';
import { MapComponent } from '../../common/map/map.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, LocationsListComponent, CityOffersComponent, MapComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  public offersCount = input<number>();
  public offersPerPage = input<number>();
  public className = CardClass.Cities;
  public mapClass = MapClass.Cities;
}
