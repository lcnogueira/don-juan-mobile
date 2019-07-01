import React, { Component } from 'react';

import MainContainer from '~/components/MainContainer';
import NavigationService from '~/services/navigation';

import {
  LeftButton, LeftIcon, Title, Ammount, CartList, CartItem, ProductImage, Info, Name, Size, Price, DeleteButton, DeleteIcon, ButtonsContainer, ShoppingButton, ShoppingIcon, OrderButton, OrderText, RightIcon,
} from './styles';
import { Header } from '~/styles/components';

class Cart extends Component {
  state = {
    orders: [
      {
        id: 1, product: 'Pizza Calabresa', size: 'Tamanho: Média', price: '42.00', image: 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/1.png',
      },
      {
        id: 2, product: 'Pizza 4 Queijos', size: 'Tamanho Pequena', price: '29.00', image: 'https://s3.amazonaws.com/bootcamp.fs/Pizzas/6.png',
      },
      {
        id: 3, product: 'Coca-cola', size: 'Lata 300ML', price: '6.00', image: 'https://s3.amazonaws.com/bootcamp.fs/bebidas@1x.png',
      },
    ],
  }

  componentDidMount() {

  }

  render() {
    const { orders } = this.state;

    return (
      <MainContainer>
        <Header>
          <LeftButton onPress={() => NavigationService.goBack()}>
            <LeftIcon />
          </LeftButton>
          <Title>Cart</Title>
          <Ammount>$107.00</Ammount>
        </Header>
        <CartList
          data={orders}
          keyExtractor={order => String(order.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: order }) => (
            <CartItem key={order.id}>
              <ProductImage source={{ uri: order.image }} />
              <Info>
                <Name>{order.product}</Name>
                <Size>{order.size}</Size>
                <Price>{`$${order.price}`}</Price>
              </Info>
              <DeleteButton onPress={() => { }}>
                <DeleteIcon />
              </DeleteButton>
            </CartItem>
          )
          }
          ListFooterComponent={() => (
            <ButtonsContainer>
              <ShoppingButton onPress={() => NavigationService.navigate('Products')}>
                <ShoppingIcon />
              </ShoppingButton>
              <OrderButton onPress={() => NavigationService.navigate('Order')}>
                <OrderText>PLACE ORDER</OrderText>
                <RightIcon />
              </OrderButton>
            </ButtonsContainer>
          )}
        />

      </MainContainer>
    );
  }
}

export default Cart;
