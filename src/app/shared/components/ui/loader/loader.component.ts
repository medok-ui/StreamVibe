import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  // public isLoading = signal<boolean>(true);
  // public ngOnInit(): void {
  //   setTimeout(() => {
  //     this.isLoading.update((bool) => !bool);
  //   }, 3000);
  // }
}
