import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})

export class UserInfoComponent {}
