import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RedButtonComponent } from '../red-button/red-button.component';

@Component({
  selector: 'app-tariff-card',
  imports: [RouterLink, RedButtonComponent],
  templateUrl: './tariff-card.component.html',
  styleUrl: './tariff-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffCardComponent {
  public tariffName = input.required<string>();
  public tariffDescription = input.required<string>();
  public tariffPrice = input.required<string>();
  public tariffDate = input.required<'Monthly' | 'Yearly'>();
}
