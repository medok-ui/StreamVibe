import { GoogleSigninButtonDirective } from '@abacritt/angularx-social-login';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { RedButtonComponent } from '../../../../shared/components/red-button/red-button.component';

const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const PASSWORD_PATTERN = /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)[a-zA-Zа-яА-ЯёЁ\d]{8,}$/;

@Component({
  selector: 'app-login',
  imports: [
    GoogleSigninButtonDirective,
    RedButtonComponent,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public isPasswordVisible = signal<boolean>(false);
  private authService = inject(AuthService);

  public form = new FormGroup({
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
    const { email, password } = this.form.value;
    this.authService.login(email!, password!);
    this.form.reset();
  }
}
