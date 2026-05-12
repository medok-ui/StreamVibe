import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PRICING_DATA } from '../../core/constants/pricing-data';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { TariffsSectionComponent } from '../../shared/components/sections/tariffs-section/tariffs-section.component';
import { IPricingFeature } from '../../shared/interfaces/pricing-feature.interface';
import { CtaSectionComponent } from '../../shared/components/sections/cta-section/cta-section.component';

@Component({
  selector: 'app-subscription',
  imports: [HeaderComponent, FooterComponent, CtaSectionComponent, TariffsSectionComponent],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionComponent {
  public tariffPlans = signal<IPricingFeature[]>(PRICING_DATA);
}
