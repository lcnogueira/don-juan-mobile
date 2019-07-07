import React from 'react';
import { Alert, AsyncStorage } from 'react-native';

import { FAB, FABIcon } from './styles';

import NavigationService from '~/services/navigation';

const confirmLogout = () => {
  Alert.alert('Logout', 'Are you sure you want to leave the app?', [
    { text: 'No' },
    {
      text: 'Yes',
      onPress: () => {
        AsyncStorage.clear();
        NavigationService.navigate('SignIn');
      },
    },
  ],
  { cancelable: false });
};

const LogoutButton = () => (
  <FAB onPress={() => confirmLogout()}>
    <FABIcon />
  </FAB>
);

export default LogoutButton;
