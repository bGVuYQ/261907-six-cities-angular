import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MapClass } from '../../../const';

@Component({
  selector: 'app-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent {
  public className = input.required<MapClass>();
}
