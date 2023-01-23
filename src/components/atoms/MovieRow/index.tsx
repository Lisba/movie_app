import React from 'react';
import { Text, Pressable } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { MOVIE_DETAILS } from '@helpers';
import { MovieRowProps, RootStackParamList } from './types';
import styles from './styles';

const MovieRow = ({ item }: MovieRowProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressHandler = () => {
    navigation.navigate(MOVIE_DETAILS, { item });
  };

  return (
    <Pressable onPress={onPressHandler}>
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
};

export default MovieRow;
