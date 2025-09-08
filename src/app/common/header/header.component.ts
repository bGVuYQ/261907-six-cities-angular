import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { UserInfoComponent } from "./user-info/user-info.component";

@Component({
  selector: 'app-header',
  imports: [LogoComponent, UserInfoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  public shouldRenderUserInfo = input<boolean>();
}
