import styled from 'styled-components/native';

import { metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${metrics.doublePadding};
`;

export const Background = styled.Image`
  position: absolute;
  top: 0;
  z-index: -1;
`;
