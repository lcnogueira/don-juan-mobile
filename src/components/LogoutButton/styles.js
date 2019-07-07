import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '~/styles';

export const FAB = styled.TouchableOpacity.attrs({
})`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50;
  background-color: ${colors.primary};
  color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const FABIcon = styled(Icon).attrs({
  size: 30,
  color: colors.white,
  name: 'logout',
})``;
