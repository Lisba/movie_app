import { MOVIE_DETAILS } from '@helpers';

export type MovieRowProps = {
  item: {
    title: string;
    backdrop_path: string;
    id: number;
  };
};

export type RootStackParamList = {
  [MOVIE_DETAILS]: { id: number } | undefined;
};
