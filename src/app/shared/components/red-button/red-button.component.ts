import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[appRedButton]',
  imports: [],
  templateUrl: './red-button.component.html',
  styleUrl: './red-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedButtonComponent {}
