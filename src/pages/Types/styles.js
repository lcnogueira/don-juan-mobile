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

export const TypeItem = styled.TouchableOpacity`
  align-items: center;
  background: ${colors.white};
  border-radius: ${metrics.doubleRadius}px;
  padding: 25px;
  width: ${(metrics.screenWidth - 50) / 2}px;
  margin-bottom: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  elevation: 6;
`;

export const TypeImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 120px;
  height: 120px;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: ${colors.secondary};
  letter-spacing: 0;
  font-weight: bold;
`;
