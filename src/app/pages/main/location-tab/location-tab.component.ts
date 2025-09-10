import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LinkToCityComponent } from '../../../common/link-to-city/link-to-city.component';

@Component({
  selector: 'app-location-tab',
  imports: [LinkToCityComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './location-tab.component.html'
})

export class LocationTabComponent {
  public city = input<string>();
}
