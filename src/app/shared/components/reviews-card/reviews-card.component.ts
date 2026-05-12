import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IUserReview } from '../../interfaces/user-review.interface';

@Component({
  selector: 'app-reviews-card',
  imports: [],
  templateUrl: './reviews-card.component.html',
  styleUrl: './reviews-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsCardComponent {
  public reviewData = input.required<IUserReview>();

  public countStars(review: IUserReview): IUserReview[] {
    return new Array(review.star);
  }
}
