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

export const Ammount = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  letter-spacing: 0;
`;

export const CartList = styled.FlatList`
  flex: 1
`;

export const CartItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.white};
  border-radius: ${metrics.doubleRadius}px;
  margin-bottom: ${metrics.baseMargin}px;
  padding: 15px;
  elevation: 6;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 80px;
  height: 76px;
  margin-right: ${metrics.baseMargin}px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AmountInput = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
})`
  width: 45px;
  height: 30px;
  padding: 0 ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  border-width: 1px;
  border-color: ${colors.lighter};
  border-radius: ${metrics.baseRadius}px;
  font-weight: bold;
  color: ${colors.darkerTransparent};
`;

export const Name = styled.Text`
  font-size: 12px;
  color: ${colors.secondary};
  letter-spacing: 0;
  margin-bottom: 5px;
`;

export const Size = styled.Text`
  font-size: 11px;
  color: ${colors.gray};
  letter-spacing: 0;
  margin-bottom: 5px;
  line-height: 14px;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: ${colors.secondary};
  letter-spacing: 0;
  font-weight: bold;
`;

export const DeleteButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 10,
    rigth: 10,
    bottom: 5,
  },
})``;

export const DeleteIcon = styled(Icon).attrs({
  size: 22,
  color: colors.danger,
  name: 'delete-forever',
})``;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${metrics.baseMargin}px;
`;

export const ShoppingButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 10,
    rigth: 10,
    bottom: 5,
  },
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${colors.lighter};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShoppingIcon = styled(Icon).attrs({
  size: 20,
  color: colors.gray,
  name: 'add-shopping-cart',
})``;

export const OrderButton = styled.TouchableOpacity`
  background-color: ${colors.danger};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  padding: 9px ${metrics.basePadding}px;
`;

export const RightIcon = styled(Icon).attrs({
  size: 20,
  color: colors.white,
  name: 'keyboard-arrow-right',
})`
  margin-left: ${metrics.baseMargin}px;
`;

export const OrderText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: bold;
`;
