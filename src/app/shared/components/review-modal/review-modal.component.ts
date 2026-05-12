import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-review-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './review-modal.component.html',
  styleUrl: './review-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewModalComponent implements OnInit {
  private modalService = inject(ModalService);

  public stars = signal<number[]>([0, 1, 2, 3, 4]);
  public selectedStars = signal<number>(0);

  public hintStar = signal<string[]>(['Terrible', 'Poor', 'Average', 'Good', 'Excellent']);
  public selectedHintStar = signal<string>('Terrible');

  public rating = signal<number[]>([1, 2, 3, 4, 5]);
  public selectedRating = signal<number>(2);

  public isSpoiler = signal<boolean>(false);

  public userName = signal<string | null>('');
  public userLocation = signal<string | null>('');
  public reviewText = signal<string | null>('');

  public form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    userLocation: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    reviewText: new FormControl('', [Validators.required, Validators.maxLength(200)]),
  });

  public ngOnInit(): void {
    this.form.valueChanges.subscribe((values) => {
      this.userName.set(values.userName!.trim());
      this.userLocation.set(values.userLocation!.trim());
      this.reviewText.set(values.reviewText!.trim());
    });
  }

  public onCloseModal(): void {
    this.modalService.isActiveModal.set(false);
    console.log(this.modalService.isActiveModal());
  }

  public setRating(index: number): void {
    this.selectedStars.set(index);
    this.selectedHintStar.set(this.hintStar()[index]);
    this.selectedRating.set(this.rating()[index]);
  }

  public onSpoiler(): void {
    this.isSpoiler.update((bool) => !bool);
  }

  public onReset(): void {
    this.form.reset();
    this.userName.set('');
    this.userLocation.set('');
    this.reviewText.set('');
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.modalService.userName.set(this.userName()!);
      this.modalService.userLocation.set(this.userLocation()!);
      this.modalService.userRating.set(this.selectedRating()!);
      this.modalService.reviewText.set(this.reviewText()!);
      this.modalService.addNewUserReview();
      this.modalService.isActiveModal.set(false);
      this.modalService.isAddReview.set(true);
    }
  }
}
