import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  GoogleLoginProvider,
  SOCIAL_AUTH_CONFIG,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';

import { provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    // google auth provider config
    {
      provide: SOCIAL_AUTH_CONFIG,
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '929015368372-jt7spi45d5scvgdd5tavdkbunhjdgg7v.apps.googleusercontent.com',
              {
                oneTapEnabled: false,
                prompt: 'select_account',
                enable_fedcm: false,
                ux_mode: 'redirect',
              },
            ),
          },
        ],
        onError: (err) => console.error(err),
      } as SocialAuthServiceConfig,
    },
    provideAuth(() => getAuth()),
  ],
};
