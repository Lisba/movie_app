import React, { useRef, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import Config from 'react-native-config';
import { CarouselItem, SLIDER_WIDTH, ITEM_WIDTH } from '@components';
import { movie } from '@helpers';
import { StyledContainerCarusel } from './styles';
import { CarouselCardsProps } from './types';

const CarouselCards = ({ data }: CarouselCardsProps) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  const parseData = (data: [movie]) => {
    if (data) {
      return data.map((item: movie) => {
        return {
          title: item.title,
          imgUrl: `${Config.IMAGE_BASE_URL_CAROUSEL}${item.backdrop_path}`,
        };
      });
    }
  };

  return (
    <StyledContainerCarusel>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={carouselRef}
        data={parseData(data) || []}
        renderItem={CarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={index => setIndex(index)}
      />
    </StyledContainerCarusel>
  );
};

export default CarouselCards;
