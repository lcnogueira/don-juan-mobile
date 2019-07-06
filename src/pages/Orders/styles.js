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

export const OrderItem = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: ${colors.white};
  border-radius: ${metrics.doubleRadius}px;
  margin-bottom: ${metrics.baseMargin}px;
  padding: 15px;
  elevation: 6;
`;

export const OrderName = styled.Text`
  font-size: 12px;
  color: ${colors.primary};
  letter-spacing: 0;
  margin-bottom: 5px;
`;

export const OrderTime = styled.Text`
  font-size: 11px;
  color: ${colors.gray};
  letter-spacing: 0;
  margin-bottom: 5px;
  line-height: 14px;
`;

export const OrderPrice = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  letter-spacing: 0;
  margin-bottom: 5px;
  font-weight: bold;
`;
