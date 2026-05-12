import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-faq-card',
  imports: [],
  templateUrl: './faq-card.component.html',
  styleUrl: './faq-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqCardComponent {
  public faqId = input.required<string>();
  public faqQuestion = input.required<string>();
  public faqAnswer = input.required<string>();
  public isFaq = signal<boolean>(false);

  public onFaq(): void {
    this.isFaq.update((bool) => !bool);
  }
}
