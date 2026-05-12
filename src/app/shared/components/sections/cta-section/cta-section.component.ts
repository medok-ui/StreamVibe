import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RedButtonComponent } from '../../red-button/red-button.component';

@Component({
  selector: 'app-cta-section',
  imports: [RedButtonComponent],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaSectionComponent {}
