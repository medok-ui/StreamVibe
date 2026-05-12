import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { CATEGORY_CARD } from '../../../../core/constants/category-card';
import { MovieService } from '../../../../core/services/movie.service';
import { CategoryCardComponent } from '../../../../shared/components/category-card/category-card.component';
import { ICategoryCard } from '../../../../shared/interfaces/home.interfaces';
import { IMovie } from '../../../interfaces/movie.interface';
import { NewReleaseCardComponent } from '../../new-release-card/new-release-card.component';
import { RecommendationCardComponent } from '../../recommendation-card/recommendation-card.component';
import { ReleaseShowsCardComponent } from '../../release-shows-card/release-shows-card.component';
import { TrendingCardComponent } from '../../trending-card/trending-card.component';
import { TrendingShowsCardComponent } from '../../trending-shows-card/trending-shows-card.component';

@Component({
  selector: 'app-films-section',
  imports: [
    CategoryCardComponent,
    TrendingCardComponent,
    NewReleaseCardComponent,
    RecommendationCardComponent,
    TrendingShowsCardComponent,
    ReleaseShowsCardComponent,
  ],
  templateUrl: './films-section.component.html',
  styleUrl: './films-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsSectionComponent implements OnInit, AfterViewInit {
  private movieService = inject(MovieService);
  private destroyRef = inject(DestroyRef);

  public movieTrendingDB = signal<IMovie[]>([]);
  public movieReleasesDB = signal<IMovie[]>([]);
  public movieRecommendationsDB = signal<IMovie[]>([]);
  public movieTrendingShowsDB = signal<IMovie[]>([]);
  public movieNewReleasesShowsDB = signal<IMovie[]>([]);

  public filmsTitleSection = input.required<string>();
  public filmsCategorySection = input.required<string>();
  public filmsDescriptionSection = input<string>();

  public categoryCard = signal<ICategoryCard[]>(CATEGORY_CARD);
  public slider = viewChild<ElementRef<HTMLUListElement>>('slider');
  public cardWidth = signal<number>(0);
  public steps = signal<number[]>([0, 1, 2, 3]);
  public currentStep = signal<number>(0);
  public totalSteps = signal<number>(3);

  public sliderTransform = computed(() => {
    return `translateX(-${this.currentStep() * this.cardWidth()}px)`;
  });

  public ngAfterViewInit(): void {
    this.updateCardWidth();

    window.addEventListener('resize', () => {
      this.updateCardWidth();
    });
  }

  private updateCardWidth(): void {
    const sliderEl = this.slider()?.nativeElement;
    if (!sliderEl) return;
    const firstCard = sliderEl.querySelector('.explore-categories-item');
    if (!firstCard) return;
    const gap = 20;
    this.cardWidth.set(firstCard.clientWidth + gap);
  }

  public onNext(): void {
    this.currentStep.update((num) => (num < this.totalSteps() ? num + 1 : num));
  }
  public onPrev(): void {
    this.currentStep.update((num) => (num > 0 ? num - 1 : num));
  }

  public ngOnInit(): void {
    this.movieService
      .getMoviesTrending()
      .pipe(
        tap(
          (movie: IMovie[]) => this.movieTrendingDB.set(movie),
          takeUntilDestroyed(this.destroyRef),
        ),
      )
      .subscribe();

    this.movieService
      .getMoviesReleases()
      .pipe(
        tap(
          (movie: IMovie[]) => this.movieReleasesDB.set(movie),
          takeUntilDestroyed(this.destroyRef),
        ),
      )
      .subscribe();

    this.movieService
      .getMoviesRecommendations()
      .pipe(
        tap(
          (movie: IMovie[]) => this.movieRecommendationsDB.set(movie),
          takeUntilDestroyed(this.destroyRef),
        ),
      )
      .subscribe();

    this.movieService
      .getMoviesTrendingShows()
      .pipe(
        tap(
          (movie: IMovie[]) => this.movieTrendingShowsDB.set(movie),
          takeUntilDestroyed(this.destroyRef),
        ),
      )
      .subscribe();

    this.movieService
      .getMoviesNewReleasedShows()
      .pipe(
        tap(
          (movie: IMovie[]) => this.movieNewReleasesShowsDB.set(movie),
          takeUntilDestroyed(this.destroyRef),
        ),
      )
      .subscribe();
  }
}
