import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IMovie } from '../../interfaces/movie.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-release-shows-card',
  imports: [RouterLink],
  templateUrl: './release-shows-card.component.html',
  styleUrl: './release-shows-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReleaseShowsCardComponent {
  public movies = input.required<IMovie>();
}
