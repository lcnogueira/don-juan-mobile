import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: `${colors.secondary}`,
})`
  font-weight: bold;
`;
