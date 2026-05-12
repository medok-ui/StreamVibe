import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { isPlatformBrowser } from '@angular/common';
import { DestroyRef, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser = signal<SocialUser | null>(null);
  private socialAuthService = inject(SocialAuthService, { optional: true });
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private auth = inject(Auth);
  private destroyRef = inject(DestroyRef);
  public isUserLogin = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.socialAuthService!.authState.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(
        (user) => {
          this.currentUser.set(user);

          if (user) {
            console.info(user.name);
          }
        },
      );
    }
  }

  public async login(email: string, password: string): Promise<void> {
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      this.isUserLogin.set(true);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
    }
  }
  public async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<void> {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }
}
