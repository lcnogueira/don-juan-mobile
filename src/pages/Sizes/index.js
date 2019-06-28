import React, { Component } from 'react';

import MainContainer from '~/components/MainContainer';
import NavigationService from '~/services/navigation';

import {
  Header, LeftButton, LeftIcon, Title, SizeList, SizeItem, SizeImage, Name, Price,
} from './styles';


class Sizes extends Component {
  state = {
    sizes: [
      {
        id: 1,
        name: 'Gigante',
        image: 'https://s3.amazonaws.com/bootcamp.fs/Tamanhos/tamanho-gg.png',
        price: '76.00',
      },
      {
        id: 2,
        name: 'Grande',
        image: 'https://s3.amazonaws.com/bootcamp.fs/Tamanhos/tamanho-gg.png',
        price: '59.00',
      },
      {
        id: 3,
        name: 'Média',
        image: 'https://s3.amazonaws.com/bootcamp.fs/Tamanhos/tamanho-gg.png',
        price: '42.00',
      },
      {
        id: 4,
        name: 'Pequena',
        image: 'https://s3.amazonaws.com/bootcamp.fs/Tamanhos/tamanho-gg.png',
        price: '29.00',
      },
    ],
  }

  componentDidMount() {

  }

  render() {
    const { sizes } = this.state;

    return (
      <MainContainer>
        <Header>
          <LeftButton onPress={() => NavigationService.goBack()}>
            <LeftIcon />
          </LeftButton>
          <Title>Choose a size</Title>
        </Header>
        <SizeList
          data={sizes}
          keyExtractor={size => String(size.id)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: size }) => (
            <SizeItem key={size.id} onPress={() => NavigationService.navigate('Cart')}>
              <SizeImage source={{ uri: size.image }} />
              <Name>{size.name}</Name>
              <Price>{`$${size.price}`}</Price>
            </SizeItem>
          )
          }
        />

      </MainContainer>
    );
  }
}

export default Sizes;
