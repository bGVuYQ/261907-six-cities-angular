import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-location-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './location-tab.component.html',
  styleUrl: './location-tab.component.css'
})

export class LocationTabComponent {
  public city = input<string>();
}
