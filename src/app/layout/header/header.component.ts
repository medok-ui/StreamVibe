import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HEADER_LINKS } from '../../core/constants/navigation';
import { INavLink } from '../../shared/interfaces/header.interfaces';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public navLinks = signal<INavLink[]>(HEADER_LINKS);
  public isActive = signal<string>('Home');
  public isMenu = signal<boolean>(false);

  public onNavLink(navLabel: string): void {
    this.isActive.set(navLabel);
  }

  public onMenu(): void {
    this.isMenu.update((bool) => !bool);
  }
}
