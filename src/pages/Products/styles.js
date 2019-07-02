import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const LeftButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 10,
    rigth: 10,
    bottom: 5,
  },
})``;

export const HistoryIcon = styled(Icon).attrs({
  size: 24,
  color: colors.white,
  name: 'history',
})``;

export const RightButton = styled.TouchableOpacity.attrs({
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
  background: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShoppingIcon = styled(CommunityIcon).attrs({
  size: 24,
  color: colors.white,
  name: 'shopping',
})``;

export const BadgeText = styled.Text`
    color: ${colors.secondary};
    font-size: 10px;
    font-weight: bold;
`;

export const BadgeView = styled.View`
    position:absolute;
    z-index:1;
    top:0px;
    right:0px;
    padding:1px;
    background-color: #FFC108;
    border-radius:50px;
    width:15px;
    height:15px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
  letter-spacing: 0;
`;

export const ProductsList = styled.FlatList`
  flex: 1
`;

export const ProductItem = styled.TouchableOpacity`
  flex: 1;
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
  width: 79px;
  height: 79px;
  margin-right: ${metrics.baseMargin}px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: ${colors.secondary};
  letter-spacing: 0;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
  letter-spacing: 0;
  margin-bottom: 5px;
  line-height: 14px;
`;

export const TimeInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimeIcon = styled(Icon).attrs({
  size: 14,
  color: colors.gray,
  name: 'timer',
})`
`;

export const Time = styled.Text`
  font-size: 10px;
  color: ${colors.gray};
  letter-spacing: 0.46px;
  margin-left: 2px;
`;
