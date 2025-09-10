import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-link-to-city',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './link-to-city.component.html',
  styleUrl: './link-to-city.component.css'
})

export class LinkToCityComponent {
  public city = input<string>();
  public isActive = input<boolean>(false);
}
