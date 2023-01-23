import { useState } from 'react';
import { moviesDataSet, movie } from '@helpers';

const useFetchMovies = (fetchFunction: () => Promise<any>) => {
  const [movies, setMovies] = useState<moviesDataSet | movie | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData: () => Promise<void> = async () => {
    try {
      setLoading(true);
      const { data } = await fetchFunction();
      setMovies(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, movies, loading];
};

export default useFetchMovies;
