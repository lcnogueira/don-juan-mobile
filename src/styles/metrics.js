import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 20,
  doublePadding: 40,
  baseMargin: 10,
  doubleMargin: 20,
  tripleMargin: 30,
  baseRadius: 5,
  doubleRadius: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
