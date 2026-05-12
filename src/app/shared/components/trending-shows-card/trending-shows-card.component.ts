import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IMovie } from '../../interfaces/movie.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trending-shows-card',
  imports: [RouterLink],
  templateUrl: './trending-shows-card.component.html',
  styleUrl: './trending-shows-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingShowsCardComponent {
  public movies = input.required<IMovie>();
}
