import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMovie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-trending-card',
  imports: [RouterLink],
  templateUrl: './trending-card.component.html',
  styleUrl: './trending-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingCardComponent {
  public movie = input.required<IMovie>();
}
