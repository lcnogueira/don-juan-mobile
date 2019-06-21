import styled from 'styled-components/native';

import { metrics } from '~/styles';

export const ContainerAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const BackgroundWrapper = styled.ImageBackground.attrs({
  resideMode: 'cover',
})`
  flex: 1;
`;

export const InnerContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
`;

export const Logo = styled.Image`
  width: 72px;
  height: 72px;
  margin-bottom: ${metrics.tripleMargin};
  align-self: center;
`;
