import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './favorites.component.html'
})

export class FavoritesComponent {}
