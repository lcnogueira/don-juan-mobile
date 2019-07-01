import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const LeftButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 10,
    rigth: 10,
    bottom: 5,
  },
})`
  margin-right: ${metrics.doubleMargin}px;
`;

export const LeftIcon = styled(Icon).attrs({
  size: 24,
  color: colors.white,
  name: 'keyboard-arrow-left',
})``;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
  letter-spacing: 0;
  flex: 1;
`;

export const SizeList = styled.FlatList`
  flex: 1;
`;

export const SizeItem = styled.TouchableOpacity`
  align-items: center;
  background: ${colors.white};
  border-radius: ${metrics.doubleRadius}px;
  padding: ${metrics.basePadding}px;
  width: ${(metrics.screenWidth - 50) / 2}px;
  margin-bottom: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  elevation: 6;
`;

export const SizeImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  margin-bottom: 25px;
  width: 120px;
  height: 120px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: ${colors.secondary};
  letter-spacing: 0;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: ${colors.secondary};
  letter-spacing: 0;
  font-weight: bold;
  opacity: 0.6;
`;
