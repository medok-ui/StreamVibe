import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RedButtonComponent } from '../../../../shared/components/red-button/red-button.component';
import { AuthService } from '../../../../core/auth/auth.service';

const NAME_PATTERN = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;
const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const PASSWORD_PATTERN = /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)[a-zA-Zа-яА-ЯёЁ\d]{8,}$/;

@Component({
  selector: 'app-register',
  imports: [RedButtonComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private router = inject<Router>(Router);
  private authService = inject(AuthService);
  public isPasswordVisible = signal<boolean>(false);

  public form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(NAME_PATTERN),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(NAME_PATTERN),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(EMAIL_PATTERN),
    ]),
    password: new FormControl('', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]),
  });

  public onPassword(): void {
    this.isPasswordVisible.update((bool) => !bool);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const { email, password, firstName, lastName } = this.form.value;
      this.authService.register(email!, password!, firstName!, lastName!);
      this.form.reset();
      this.router.navigate(['/auth/login']);
    }
  }
}
