import { apiClient } from '@config';
import {
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
  UPCOMING_MOVIES,
  DETAIL_MOVIE,
} from '@helpers';

const LANGUAGE = 'es-ES';

export const getNowPlayingMovies = async () => {
  const URL = NOW_PLAYING_MOVIES;
  const config = {
    params: {
      language: LANGUAGE,
    },
  };
  return await apiClient.get(URL, config);
};

export const getPopularMovies = async () => {
  const URL = POPULAR_MOVIES;
  const config = {
    params: {
      language: LANGUAGE,
    },
  };
  return await apiClient.get(URL, config);
};

export const getTopRatedMovies = async () => {
  const URL = TOP_RATED_MOVIES;
  const config = {
    params: {
      language: LANGUAGE,
    },
  };
  return await apiClient.get(URL, config);
};

export const getUpcomingMovies = async () => {
  const URL = UPCOMING_MOVIES;
  const config = {
    params: {
      language: LANGUAGE,
    },
  };
  return await apiClient.get(URL, config);
};

export const getMovieDetails = async (movie_id: number) => {
  const URL = DETAIL_MOVIE(movie_id);
  const config = {
    params: {
      language: LANGUAGE,
    },
  };
  return await apiClient.get(URL, config);
};
