import { Routes } from '@angular/router';
import { authRedirectGuard } from './core/guards/auth-redirect-guard';
import { loginGuard } from './core/guards/login-guard';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [authRedirectGuard],
    loadComponent: () => import('./features/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    canActivate: [loginGuard],
  },
  {
    path: 'movies',
    loadComponent: () =>
      import('./features/movies/movies.component').then((m) => m.MoviesComponent),
    canActivate: [loginGuard],
  },
  {
    path: 'movies/shows/:id',
    loadComponent: () => import('./features/shows/shows.component').then((m) => m.ShowsComponent),
    canActivate: [loginGuard],
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./features/support/support.component').then((m) => m.SupportComponent),
    canActivate: [loginGuard],
  },
  {
    path: 'subscriptions',
    loadComponent: () =>
      import('./features/subscription/subscription.component').then((m) => m.SubscriptionComponent),
    canActivate: [loginGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
