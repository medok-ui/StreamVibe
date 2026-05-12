import { IUserReview } from '../../shared/interfaces/user-review.interface';

export const REVIEWS_DATA: IUserReview[] = [
  {
    id: '1',
    author: 'Victor Kimani',
    location: 'From Nairobi, Kenya',
    rating: 4.5,
    star: 5,
    comment:
      "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn't watch it.",
  },
  {
    id: '2',
    author: 'Sarah Jenkins',
    location: 'From London, UK',
    rating: 5.0,
    star: 5,
    comment:
      'An absolute masterpiece of modern cinema. The cinematography was breathtaking and the soundtrack stayed with me for days after the credits rolled.',
  },
  {
    id: '3',
    author: 'Akira Tanaka',
    location: 'From Tokyo, Japan',
    rating: 4.0,
    star: 4,
    comment:
      'Solid acting and a tight script. My only gripe was the pacing in the second act, but the finale more than made up for it. Definitely worth a watch.',
  },
  {
    id: '4',
    author: 'Elena Rossi',
    location: 'From Rome, Italy',
    rating: 3.5,
    star: 3,
    comment:
      "The visuals were stunning, but I found the plot a bit predictable. It's a good popcorn movie, but don't expect a life-changing philosophical journey.",
  },
];
