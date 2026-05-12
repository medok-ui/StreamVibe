import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMovie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-recommendation-card',
  imports: [RouterLink],
  templateUrl: './recommendation-card.component.html',
  styleUrl: './recommendation-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationCardComponent {
  public movies = input.required<IMovie>();

  public setMovieStars(movie: IMovie): string[] {
    return new Array(movie.stars);
  }
}
