import { inject, Injectable } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { forkJoin, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IMovie } from '../../shared/interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private db = inject(Database);

  public getMoviesTrending(): Observable<IMovie[]> {
    return new Observable((observer) => {
      const moviesTrendingRef = ref(this.db, 'trending');

      const unsubscribe = onValue(
        moviesTrendingRef,
        (snapshot) => observer.next(snapshot.val() ?? []),
        (error) => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  public getMoviesReleases(): Observable<IMovie[]> {
    return new Observable((observer) => {
      const moviesReleasesRef = ref(this.db, 'new-releases');

      const unsubscribe = onValue(
        moviesReleasesRef,
        (snapshot) => observer.next(snapshot.val() ?? []),
        (error) => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  public getMoviesRecommendations(): Observable<IMovie[]> {
    return new Observable((observer) => {
      const moviesRecommendationsRef = ref(this.db, 'recommendation');

      const unsubscribe = onValue(
        moviesRecommendationsRef,
        (snapshot) => observer.next(snapshot.val() ?? []),
        (error) => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  public getMoviesTrendingShows(): Observable<IMovie[]> {
    return new Observable((observer) => {
      const moviesTrendingShowsRef = ref(this.db, 'trending-shows');

      const unsubscribe = onValue(
        moviesTrendingShowsRef,
        (snapshot) => observer.next(snapshot.val() ?? []),
        (error) => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  public getMoviesNewReleasedShows(): Observable<IMovie[]> {
    return new Observable((observer) => {
      const moviesNewReleasedShowsRef = ref(this.db, 'new-released-shows');

      const unsubscribe = onValue(
        moviesNewReleasedShowsRef,
        (snapshot) => observer.next(snapshot.val() ?? []),
        (error) => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  public getMovieById(id: string): Observable<IMovie | null> {
    // forkJoin - ждет завершения всех переданных Observable и возвращает массив их последних значений, что позволяет нам получить все коллекции фильмов одновременно
    // take(1) - берем только первое значение из каждого потока, так как нам нужно только одно значение для поиска фильма по id
    // flat() - для упрощения поиска фильма по id, объединяем массивы коллекций в один массив фильмов
    return forkJoin([
      this.getMoviesTrending().pipe(take(1)),
      this.getMoviesReleases().pipe(take(1)),
      this.getMoviesRecommendations().pipe(take(1)),
      this.getMoviesTrendingShows().pipe(take(1)),
      this.getMoviesNewReleasedShows().pipe(take(1)),
    ]).pipe(
      map((collections) => {
        const allMovies = collections.flat();
        return allMovies.find((movie) => movie.id === id) ?? null;
      }),
    );
  }
}
