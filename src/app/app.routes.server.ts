import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
{
    path: 'movies/shows/:id', 
    renderMode: RenderMode.Server
  },
  {
    path: '**', 
    renderMode: RenderMode.Prerender
  }
];
