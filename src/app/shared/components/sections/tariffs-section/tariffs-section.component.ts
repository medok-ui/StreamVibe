import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PRICING_PLANS } from '../../../../core/constants/pricing-plans';
import { TariffCardComponent } from '../../../../shared/components/tariff-card/tariff-card.component';
import { IPricingPlan } from '../../../../shared/interfaces/home.interfaces';

@Component({
  selector: 'app-tariffs-section',
  imports: [TariffCardComponent],
  templateUrl: './tariffs-section.component.html',
  styleUrl: './tariffs-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffsSectionComponent {
  public pricingPlans = signal<IPricingPlan[]>(PRICING_PLANS);
  public isYearly = signal<'Monthly' | 'Yearly'>('Monthly');
  public isClickMonthly = signal<boolean>(true);
  public isClickYearly = signal<boolean>(false);

  public onBillingPeriodMonthly(): void {
    this.isYearly.set('Monthly');
    this.isClickMonthly.set(true);
    this.isClickYearly.set(false);
    this.pricingPlans.update((plans: any) =>
      plans.map((data: any) => {
        return {
          ...data,
          price: data.price / 3,
        };
      }),
    );
  }

  public onBillingPeriodYearly(): void {
    this.isYearly.set('Yearly');
    this.isClickMonthly.set(false);
    this.isClickYearly.set(true);

    this.pricingPlans.update((plans: any) =>
      plans.map((data: any) => {
        return {
          ...data,
          price: data.price * 3,
        };
      }),
    );
  }
}
