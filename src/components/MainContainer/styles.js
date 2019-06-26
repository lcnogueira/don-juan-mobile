import styled from 'styled-components/native';

import { metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.basePadding}px;
`;

export const Background = styled.Image`
  position: absolute;
  top: 0;
  z-index: -1;
`;
