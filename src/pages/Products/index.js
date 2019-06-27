import React, { Component } from 'react';

import MainContainer from '~/components/MainContainer';
import NavigationService from '~/services/navigation';

import {
  Header, LeftButton, HistoryIcon, RightButton, ShoppingIcon, Title, ProductsList, ProductItem, ProductImage, Info, Description, Name, TimeInfo, TimeIcon, Time,
} from './styles';


class Products extends Component {
  state = {
    products: [
      {
        id: 1, name: 'Pizzas', description: 'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome', time: '30', image: 'https://s3.amazonaws.com/bootcamp.fs/pizzas@1x.png',
      },
      {
        id: 2, name: 'Massas', description: '10 tipos de massas com diferentes molhos para te satisfazer', time: '25', image: 'https://s3.amazonaws.com/bootcamp.fs/massas@1x.png',
      },
      {
        id: 3, name: 'Calzones', description: 'Calzones suber recheados com mais de 50 sabores diferentes', time: '15', image: 'https://s3.amazonaws.com/bootcamp.fs/calzones@1x.png',
      },
      {
        id: 4, name: 'Bebidas não-alcóolicas', description: 'Refrigerantes, sucos, chá gelado, energéticos e água', time: '5', image: 'https://s3.amazonaws.com/bootcamp.fs/bebidas@1x.png',
      },
      {
        id: 5, name: 'Bebidas alcóolicas', description: 'Cervejas artesanais, vinhos e destilados', time: '5', image: 'https://s3.amazonaws.com/bootcamp.fs/bebidas-alcoolicas@1x.png',
      },
      {
        id: 6, name: 'Massas', description: '10 tipos de massas com diferentes molhos para te satisfazer', time: '25', image: 'https://s3.amazonaws.com/bootcamp.fs/massas@1x.png',
      },
      {
        id: 7, name: 'Calzones', description: 'Calzones subper recheados com mais de 50 sabores diferentes', time: '15', image: 'https://s3.amazonaws.com/bootcamp.fs/calzones@1x.png',
      },
      {
        id: 8, name: 'Bebidas não-alcóolicas', description: 'Refrigerantes, sucos, chá gelado, energéticos e água', time: '5', image: 'https://s3.amazonaws.com/bootcamp.fs/bebidas@1x.png',
      },
    ],
  }

  componentDidMount() {

  }

  render() {
    const { products } = this.state;

    return (
      <MainContainer>
        <Header>
          <LeftButton onPress={() => NavigationService.navigate('Orders')}>
            <HistoryIcon />
          </LeftButton>
          <Title>Don Juan Pizzaria</Title>
          <RightButton onPress={() => NavigationService.navigate('Cart')}>
            <ShoppingIcon />
          </RightButton>
        </Header>
        <ProductsList
          data={products}
          keyExtractor={product => String(product.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: product }) => (
            <ProductItem key={product.id} onPress={() => NavigationService.navigate('Flavor')}>
              <ProductImage source={{ uri: product.image }} />
              <Info>
                <Name>{product.name}</Name>
                <Description>{product.description}</Description>
                <TimeInfo>
                  <TimeIcon />
                  <Time>{`${product.time} mins`}</Time>
                </TimeInfo>
              </Info>
            </ProductItem>
          )
          }
        />
      </MainContainer>
    );
  }
}

export default Products;
