import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CITIES } from '../../../../const';
import { LocationTabComponent } from '../location-tab/location-tab.component';

@Component({
  selector: 'app-locations-list',
  imports: [LocationTabComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './locations-list.component.html',
  styleUrl: './locations-list.component.css'
})

export class LocationsListComponent {
  public cities = CITIES;
}
