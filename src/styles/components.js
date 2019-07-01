import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${metrics.tripleMargin}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.light,
})`
  background-color: ${colors.white};
  border-radius: ${metrics.doubleRadius}px;
  height: 44px;
  padding: 0 ${metrics.basePadding}px;
  margin-bottom: ${metrics.baseMargin}px;
  elevation: 6;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: ${metrics.doubleRadius};
  align-items: center;
  justify-content: center;
  height: 44px;
`;

export const LinkButton = styled.TouchableOpacity`
  font-size: 15px;
  color: ${colors.white};
  font-weight: bold;
  margin-top: ${metrics.doubleMargin}px;
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
`;

export const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs(props => ({
  size: 'large',
  color: props.light ? colors.white : colors.secondary,
}))`
  font-weight: bold;
`;
