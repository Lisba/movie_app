import { StyleSheet } from 'react-native';
import { Colors } from '@assets';

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.charade,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
    padding: 10,
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
});

export default styles;
