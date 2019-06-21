import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const BackgroundWrapper = styled.ImageBackground`
  flex: 1;
`;

export const ContainerAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.background};
  justify-content: center;
  align-items: stretch;
  padding: 30px;
`;

export const InnerContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 72px;
  height: 72px;
  margin-bottom: ${metrics.tripleMargin};
  align-self: center;
`;
