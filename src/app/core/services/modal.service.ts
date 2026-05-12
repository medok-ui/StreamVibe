import { Injectable, signal } from '@angular/core';
import { IUserReview } from '../../shared/interfaces/user-review.interface';
import { REVIEWS_DATA } from '../constants/reviews-data';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public reviewData = signal<IUserReview[]>(REVIEWS_DATA);

  public isActiveModal = signal<boolean>(false);
  public isAddReview = signal<boolean>(false);
  public userName = signal<string>('');
  public userLocation = signal<string>('');
  public userRating = signal<number>(0);
  public reviewText = signal<string>('');

  public addNewUserReview(): void {
    this.reviewData().push({
      id: Date.now().toString(),
      author: this.userName(),
      location: this.userLocation(),
      rating: this.userRating(),
      star: this.userRating(),
      comment: this.reviewText(),
    });
  }
}
