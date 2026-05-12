import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DEVICES_DATA } from '../../../../core/constants/devices';
import { DeviceCardComponent } from '../../../../shared/components/device-card/device-card.component';
import { IDeviceInfo } from '../../../../shared/interfaces/home.interfaces';

@Component({
  selector: 'app-devices-section',
  imports: [DeviceCardComponent],
  templateUrl: './devices-section.component.html',
  styleUrl: './devices-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevicesSectionComponent {
  public deviceCard = signal<IDeviceInfo[]>(DEVICES_DATA);
}
