import React, { Component } from 'react';

import MainContainer from '~/components/MainContainer';
import NavigationService from '~/services/navigation';

import {
  Header, LeftButton, LeftIcon, Title, OrdersList, OrderItem, OrderName, OrderTime, OrderPrice,
} from './styles';


class Orders extends Component {
  state = {
    orders: [
      {
        id: 3, number: 3, data: 'Ontem às 17h', price: '42.00',
      },
      {
        id: 2, number: 2, data: 'Há 1 semana', price: '142.00',
      },
      {
        id: 1, number: 1, data: 'Há 2 meses', price: '78.00',
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
          <LeftButton onPress={() => NavigationService.navigate('Products')}>
            <LeftIcon />
          </LeftButton>
          <Title>My Orderings</Title>
        </Header>
        <OrdersList
          data={orders}
          keyExtractor={order => String(order.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: order }) => (
            <OrderItem key={order.id}>
              <OrderName>{`Order #${order.number}`}</OrderName>
              <OrderTime>{order.data}</OrderTime>
              <OrderPrice>{`$${order.price}`}</OrderPrice>
            </OrderItem>
          )}
        />
      </MainContainer>
    );
  }
}

export default Orders;
