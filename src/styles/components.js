import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.lighter};
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  background-color: ${colors.inputBackground};
  border-width: 1px;
  border-color: ${colors.darkTransparent};
  border-radius: 5px;
  height: 44px;
  padding: 0 10px;
  margin-bottom: 20px;
  color: ${colors.white};
`;

export const Button = styled.TouchableOpacity`
  height: 44px;
  background-color: ${colors.primary};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`;

export const CancelButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: 20px;
`;

export const CancelText = styled.Text`
  color: ${colors.light};
`;
