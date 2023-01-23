import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Config from 'react-native-config';
import { useFetchMovies, movie, gender } from '@helpers';
import { getMovieDetails } from '@services';
import {
  StyledContainer,
  StyledImage,
  StyledText,
  StyledLoader,
} from './styles';
import { Colors } from '@assets';
import {
  ORIGINAL_TITLE,
  ID,
  LATIN_TITLE,
  RELEASE_DATE,
  AVERAGE,
  OVERVIEW,
  GENDER,
} from './contants';

function MovieDetails({ route }) {
  const { item } = route.params;
  const [fetchMovieDetails, movieDetails, movieDetailsLoading] = useFetchMovies(
    () => getMovieDetails(item.id),
  );

  useFocusEffect(
    useCallback(() => {
      (fetchMovieDetails as () => Promise<void>)();
    }, []),
  );

  const renderGenders = () => {
    const genres = (movieDetails as movie)?.genres;
    if (genres) {
      const GenresNames = genres.map(item => (item as gender)?.name);
      return (
        <StyledText>{`${GENDER} ${GenresNames.map(item => item)}`}</StyledText>
      );
    }
  };

  const getImageUrl = () => {
    const backdrop_path = (movieDetails as movie)?.backdrop_path;
    const baseUrlImage = Config.IMAGE_BASE_URL_MOVIE_DETAILS;
    if (backdrop_path && baseUrlImage) {
      return `${baseUrlImage}${backdrop_path}`;
    }
  };

  return (
    <StyledContainer>
      {movieDetailsLoading ? (
        <StyledLoader size="large" color={Colors.zircon} />
      ) : (
        <View>
          <StyledImage
            source={{
              uri: getImageUrl(),
            }}
          />
          <StyledText>{`${ID} ${(movieDetails as movie)?.id}`}</StyledText>
          <StyledText>{`${LATIN_TITLE} ${
            (movieDetails as movie)?.title
          }`}</StyledText>
          <StyledText>
            {`${RELEASE_DATE} ${(movieDetails as movie)?.release_date}`}
          </StyledText>
          <StyledText>{`${AVERAGE} ${
            (movieDetails as movie)?.vote_average
          }`}</StyledText>
          <StyledText>{`${OVERVIEW} ${
            (movieDetails as movie)?.overview
          }`}</StyledText>
          <StyledText>{`${ORIGINAL_TITLE} ${
            (movieDetails as movie)?.original_title
          }`}</StyledText>
          {renderGenders()}
        </View>
      )}
    </StyledContainer>
  );
}

export default MovieDetails;
