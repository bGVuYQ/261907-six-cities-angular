import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoute } from '../../../const';

@Component({
  selector: 'app-link-to-city',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './link-to-city.component.html',
  styleUrl: './link-to-city.component.css'
})

export class LinkToCityComponent {
  public routeToMain = `/${AppRoute.Main}`;
  public city = input.required<string>();
  public isActive = input<boolean>(false);
}
