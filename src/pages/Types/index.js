import React, { Component } from 'react';

import MainContainer from '~/components/MainContainer';
import NavigationService from '~/services/navigation';

import {
  Header, LeftButton, LeftIcon, Title, TypeList, TypeItem, TypeImage, Name,
} from './styles';


class Types extends Component {
  state = {
    types: [
      {
        id: 1, name: 'Calabresa', image: 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/1.png',
      },
      {
        id: 2, name: 'Frango Frito', image: 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/6.png',
      },
      {
        id: 3, name: 'Marguerita', image: 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/1.png',
      },
      {
        id: 4, name: 'Portuguesa', image: 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/6.png',
      },
      {
        id: 5, name: 'Calabresa', image: 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/1.png',
      },
      {
        id: 6, name: 'Calabresa', image: 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/6.png',
      },
      {
        id: 7, name: 'Calabresa', image: 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/1.png',
      },
      {
        id: 8, name: 'Calabresa', image: 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/6.png',
      },
    ],
  }

  componentDidMount() {

  }

  render() {
    const { types } = this.state;

    return (
      <MainContainer>
        <Header>
          <LeftButton onPress={() => NavigationService.goBack()}>
            <LeftIcon />
          </LeftButton>
          <Title>Choose a type</Title>
        </Header>
        <TypeList
          data={types}
          keyExtractor={flavor => String(flavor.id)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: type }) => (
            <TypeItem key={type.id} onPress={() => NavigationService.navigate('Sizes')}>
              <TypeImage source={{ uri: type.image }} />
              <Name>{type.name}</Name>
            </TypeItem>
          )
          }
        />

      </MainContainer>
    );
  }
}

export default Types;
