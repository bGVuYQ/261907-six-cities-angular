import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})

export class SortComponent {}
