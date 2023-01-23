export type movie = {
  title: string;
  id: number;
  backdrop_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  original_title: string;
  genres: [gender];
};

export type moviesDataSet = {
  results: [movie];
  page: number;
};

export type gender = {
  id: number;
  name: string;
};
