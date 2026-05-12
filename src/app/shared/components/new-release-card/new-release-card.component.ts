import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IMovie } from '../../interfaces/movie.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-new-release-card',
  imports: [RouterLink],
  templateUrl: './new-release-card.component.html',
  styleUrl: './new-release-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewReleaseCardComponent {
  public movies = input.required<IMovie>();
}
