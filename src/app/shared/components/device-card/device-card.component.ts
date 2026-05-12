import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-device-card',
  imports: [],
  templateUrl: './device-card.component.html',
  styleUrl: './device-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceCardComponent {
  public deviceIcon = input.required<string>();
  public deviceName = input.required<string>();
  public deviceDescription = input.required<string>();
}
