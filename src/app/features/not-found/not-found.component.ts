import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  public readonly filmStripItems = signal<string[]>(['01', '02', '03', '404', '05', '06', '07']);
  public readonly activeFrame = signal<string>('404');
  public readonly notFoundSuggestions = signal<string[]>([
    'Popular',
    'New Releases',
    'Top Rated',
    'Our Plans',
  ]);
}
