import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CATEGORY_CARD } from '../../core/constants/category-card';
import { SLIDER_FILMS } from '../../core/constants/slider-film';
import { HeaderComponent } from '../../layout/header/header.component';
import { ICategoryCard } from '../../shared/interfaces/home.interfaces';
import { IMovieSlider } from '../../shared/interfaces/movie-slider.interface';
import { FooterComponent } from "../../layout/footer/footer.component";
import {  CtaSectionComponent } from "../../shared/components/sections/cta-section/cta-section.component";
import { FilmsSectionComponent } from '../../shared/components/sections/films-section/films-section.component';

@Component({
  selector: 'app-movies',
  imports: [HeaderComponent, FilmsSectionComponent, FooterComponent, CtaSectionComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent {
  public currentStep = signal<number>(0);
  public steps = signal<number[]>([0, 1, 2, 3]);
  public slidersFilms = signal<IMovieSlider[]>(SLIDER_FILMS);
  public categoryCard = signal<ICategoryCard[]>(CATEGORY_CARD);

  public onPrev(): void {
    this.currentStep.update((num) => (num > 0 ? num - 1 : num));
  }

  public onNext(): void {
    this.currentStep.update((num) => (num < this.steps().length ? num + 1 : num));
  }

  public currentMovie = computed(() => this.slidersFilms()[this.currentStep()]);
}
