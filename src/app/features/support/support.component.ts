import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { RedButtonComponent } from '../../shared/components/red-button/red-button.component';
import { FaqSectionComponent } from '../../shared/components/sections/faq-section/faq-section.component';
import { CtaSectionComponent } from '../../shared/components/sections/cta-section/cta-section.component';

@Component({
  selector: 'app-support',
  imports: [
    HeaderComponent,
    CtaSectionComponent,
    FooterComponent,
    FaqSectionComponent,
    RedButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportComponent {
  public form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
    ]),
    number: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+?[0-9\s\-()]{7,15}$/),
    ]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    checkbox: new FormControl(false, [Validators.requiredTrue]),
  });

  public onSubmit(): void {
    if (this.form.valid) return this.form.reset();
  }
}
