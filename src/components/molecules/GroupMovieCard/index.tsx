import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { MovieRow } from '@components';
import styles from './styles';
import { GroupMovieCardProps } from './types';

const GroupMovieCard = ({ data, title }: GroupMovieCardProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.listContainer}>
        {data?.map(item => (
          <Fragment key={item.id}>
            <MovieRow item={item} />
          </Fragment>
        ))}
      </View>
    </View>
  );
};

export default GroupMovieCard;
