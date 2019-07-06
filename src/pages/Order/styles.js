import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { colors, metrics } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${metrics.tripleMargin}px;
`;

export const LeftButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 10,
    rigth: 10,
    bottom: 5,
  },
})`
  margin-right: ${metrics.doubleMargin}px;
`;

export const LeftIcon = styled(Icon).attrs({
  size: 24,
  color: colors.white,
  name: 'keyboard-arrow-left',
})``;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
  letter-spacing: 0;
  flex: 1;
`;

export const Ammount = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  letter-spacing: 0;
`;

export const ContainerAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : null,
  keyboardVerticalOffset: 95,
  enabled: Platform.OS === 'ios',
})`
  flex: 1;
`;

export const InnerView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Form = styled.View`
  flex: 1;
`;

export const NoteInput = styled.TextInput.attrs({
  placeholderTextColor: colors.light,
  textAlignVertical: 'top',
})`
  background-color: ${colors.white};
  border-radius: ${metrics.doubleRadius}px;
  padding: ${metrics.basePadding}px ${metrics.basePadding}px;
  margin-bottom: ${metrics.baseMargin}px;
  elevation: 6;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${metrics.baseMargin}px;
`;

export const CompleteButton = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  padding: 9px ${metrics.basePadding}px;
`;

export const RightIcon = styled(Icon).attrs({
  size: 20,
  color: colors.white,
  name: 'keyboard-arrow-right',
})`
  margin-left: ${metrics.baseMargin}px;
`;

export const CompleteText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: bold;
`;
