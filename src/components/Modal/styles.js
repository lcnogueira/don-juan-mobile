import styled from 'styled-components/native';

import { colors } from '~/styles';

export const ContainerAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.darkerTransparent};
  justify-content: center;
`;

export const Content = styled.View`
  background-color: ${colors.background};
  padding: 30px 20px;
  margin: 20px;
  border-radius: 5px;
  align-items: stretch;
`;

export const RNModal = styled.Modal.attrs({
  animationType: 'slide',
  transparent: true,
})``;
