import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
export { SLIDER_WIDTH, ITEM_WIDTH } from './styles';

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item?.imgUrl }} style={styles.image} />
      <Text style={styles.header}>{item?.title}</Text>
    </View>
  );
};

export default CarouselCardItem;
