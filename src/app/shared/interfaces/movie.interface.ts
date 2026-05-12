export interface IMoviePerson {
  name: string;
  location: string;
  image: string;
}

export interface IMovieRatings {
  imdb: number;
  imdb_stars: number;
  streamvibe: number;
  streamvibe_stars: number;
}

export interface IMovie {
  id: string;
  title: string;
  description: string;
  poster: string;
  duration: string;
  released_year: number;
  rating_count: string;
  stars: number;
  type: 'movie' | 'show';
  genres: string[];
  languages: string[];
  ratings: IMovieRatings;
  director: IMoviePerson;
  music: IMoviePerson;
  seasons?: string;
}
