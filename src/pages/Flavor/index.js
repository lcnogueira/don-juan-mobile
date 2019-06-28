import React, { Component } from 'react';

import MainContainer from '~/components/MainContainer';
import NavigationService from '~/services/navigation';

import {
  Header, LeftButton, LeftIcon, Title, FlavorList, FlavorItem, FlavorImage, Name,
} from './styles';


class Flavor extends Component {
  state = {
    flavors: [
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
    const { flavors } = this.state;

    return (
      <MainContainer>
        <Header>
          <LeftButton onPress={() => NavigationService.goBack()}>
            <LeftIcon />
          </LeftButton>
          <Title>Choose a flavor</Title>
        </Header>
        <FlavorList
          data={flavors}
          keyExtractor={flavor => String(flavor.id)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: flavor }) => (
            <FlavorItem key={flavor.id} onPress={() => NavigationService.navigate('Size')}>
              <FlavorImage source={{ uri: flavor.image }} />
              <Name>{flavor.name}</Name>
            </FlavorItem>
          )
          }
        />

      </MainContainer>
    );
  }
}

export default Flavor;
