import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_COLUMNS, SOCIAL_LINKS } from '../../core/constants/footer-nav';
import { IFooterColumn, ISocialLink } from '../../shared/interfaces/footer.interface';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public navigationColumns = signal<IFooterColumn[]>(FOOTER_COLUMNS);
  public socialLinks = signal<ISocialLink[]>(SOCIAL_LINKS);
}
