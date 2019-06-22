import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Label = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  font-weight: bold;
  margin-top: ${metrics.doubleMargin}px;
  align-self: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.light,
})`
  background-color: ${colors.white};
  border-color: ${colors.darkTransparent};
  border-width: 1px;
  border-radius: ${metrics.doubleRadius}px;
  height: 44px;
  padding: 0 ${metrics.basePadding}px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: ${metrics.doubleRadius};
  align-items: center;
  justify-content: center;
  height: 44px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
`;

export const CancelButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: ${metrics.doubleMargin}px;
`;

export const CancelText = styled.Text`
  color: ${colors.light};
`;
