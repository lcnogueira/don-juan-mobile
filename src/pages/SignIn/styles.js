import styled from 'styled-components/native';

import { colors } from '~/styles';

export const ContainerAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.background};
  justify-content: center;
  align-items: stretch;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  margin-bottom: 20px;
  color: ${colors.white};
  text-align: center;
`;
