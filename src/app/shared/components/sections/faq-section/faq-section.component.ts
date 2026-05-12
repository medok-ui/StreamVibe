import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FaqCardComponent } from '../../../../shared/components/faq-card/faq-card.component';
import { IFaqItem } from '../../../../shared/interfaces/home.interfaces';
import { FAQ_DATA } from '../../../../core/constants/faq';

@Component({
  selector: 'app-faq-section',
  imports: [FaqCardComponent],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSectionComponent {
  public faqList = signal<IFaqItem[]>(FAQ_DATA);
}
