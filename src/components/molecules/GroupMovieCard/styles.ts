import { StyleSheet } from 'react-native';
import { Colors } from '@assets';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    backgroundColor: Colors.blackPearl,
    borderWidth: 1,
    borderColor: Colors.zircon,
    borderRadius: 50,
  },
  listContainer: {
    display: 'flex',
  },
  titleText: {
    color: Colors.zircon,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: '5%',
  },
});

export default styles;
