import React, { Component } from 'react';

import { Text } from 'react-native';

import MainContainer from '~/components/MainContainer';
import Header from './header';

class Main extends Component {
  static navigationOptions = {
    header: Header,
  }

  render() {
    return (
      <MainContainer>
        <Header />
        <Text>Conteúdo aqui...</Text>
      </MainContainer>
    );
  }
}

export default Main;
