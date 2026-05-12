import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../core/services/modal.service';
import { MovieService } from '../../core/services/movie.service';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { RedButtonComponent } from '../../shared/components/red-button/red-button.component';
import { ReviewModalComponent } from '../../shared/components/review-modal/review-modal.component';
import { ReviewsCardComponent } from '../../shared/components/reviews-card/reviews-card.component';
import { CtaSectionComponent } from '../../shared/components/sections/cta-section/cta-section.component';
import { IMovie } from '../../shared/interfaces/movie.interface';
import { IUserReview } from '../../shared/interfaces/user-review.interface';

@Component({
  selector: 'app-shows',
  imports: [
    HeaderComponent,
    CtaSectionComponent,
    FooterComponent,
    RedButtonComponent,
    ReviewsCardComponent,
    ReviewModalComponent,
  ],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowsComponent implements OnInit, AfterViewInit {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  public modalService = inject(ModalService);

  public reviews = signal<IUserReview[]>(this.modalService.reviewData());

  public slider = viewChild<ElementRef<HTMLUListElement>>('slider');
  public cardWidth = signal<number>(0);

  public reviewStep = signal<number>(0);
  public reviewSteps = signal<number[]>([0, 1, 2, 3]);

  public movie = signal<IMovie | null>(null);

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieById(id).subscribe((movie) => {
        this.movie.set(movie ?? null);
        console.log(this.movie());
      });
    }
  }

  public getStars(count: number | undefined): number[] {
    return new Array(count ?? 0);
  }

  public onAddCardReview(): void {
    this.modalService.isActiveModal.set(true);
  }

  public ngAfterViewInit(): void {
    this.updateCardWidth();

    window.addEventListener('resize', () => {
      this.updateCardWidth();
    });
  }

  private updateCardWidth(): void {
    const sliderEl = this.slider()?.nativeElement;
    if (!sliderEl) return;
    const firstCard = sliderEl.querySelector('.shows-reviews-item');
    if (!firstCard) return;
    const gap = 20;
    this.cardWidth.set(firstCard.clientWidth + gap);
  }

  public sliderTransform = computed(() => {
    return `translateX(-${this.reviewStep() * this.cardWidth()}px)`;
  });

  public onPrev(): void {
    this.reviewStep.update((step) => (step > 0 ? step - 1 : step));
  }

  public onNext(): void {
    this.reviewStep.update((step) => (step < this.reviewSteps().length - 1 ? step + 1 : step));
  }
}
