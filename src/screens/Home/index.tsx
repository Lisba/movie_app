import React, { useCallback } from 'react';
import {
  View,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { GroupMovieCard, CarouselCard } from '@components';
import { useFetchMovies, moviesDataSet } from '@helpers';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@services';
import styles from './styles';

const Home = () => {
  const [fetchNowPlayingMovies, nowPlayingMovies, nowPlayingLoading] =
    useFetchMovies(getNowPlayingMovies);
  const [fetchPopularMovies, popularMovies, popularLoading] =
    useFetchMovies(getPopularMovies);
  const [fetchTopRatedMovies, topRatedMovies, topRatedLoading] =
    useFetchMovies(getTopRatedMovies);
  const [fetchUpcomingMovies, upcomingMovies, upcomingMoviesLoading] =
    useFetchMovies(getUpcomingMovies);

  useFocusEffect(
    useCallback(() => {
      (fetchNowPlayingMovies as () => Promise<void>)();
      (fetchPopularMovies as () => Promise<void>)();
      (fetchTopRatedMovies as () => Promise<void>)();
      (fetchUpcomingMovies as () => Promise<void>)();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.carouselContainer}>
          {!upcomingMoviesLoading ? (
            <CarouselCard data={(upcomingMovies as moviesDataSet)?.results} />
          ) : null}
        </View>

        <View style={styles.container}>
          {nowPlayingLoading ? (
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color="#fff"
            />
          ) : null}
          <GroupMovieCard
            data={(nowPlayingMovies as moviesDataSet)?.results}
            title={'En cines'}
          />
        </View>

        <View style={styles.container}>
          {popularLoading ? (
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color="#fff"
            />
          ) : null}
          <GroupMovieCard
            data={(popularMovies as moviesDataSet)?.results}
            title={'Populares'}
          />
        </View>

        <View style={styles.container}>
          {topRatedLoading ? (
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color="#fff"
            />
          ) : null}
          <GroupMovieCard
            data={(topRatedMovies as moviesDataSet)?.results}
            title={'Mejor Puntuadas'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
