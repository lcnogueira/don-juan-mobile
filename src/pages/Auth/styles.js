import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { metrics, colors } from '~/styles';

export const ContainerAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const BackgroundWrapper = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: [colors.darkTransparent, colors.darkerTransparent],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
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
