import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import MainContainer from '~/components/MainContainer';
import ContentContainer from '~/components/ContentContainer';
import NavigationService from '~/services/navigation';

import {
  LeftButton, LeftIcon, Title, OrderItem, OrderName, OrderTime, OrderPrice,
} from './styles';
import { Header, List as OrdersList } from '~/styles/components';

import OrdersActions from '~/store/ducks/orders';

export default function Orders() {
  const orders = useSelector(state => ({
    ...state.orders,
    data: state.orders.data.map(order => ({
      id: order.id,
      date: moment(order.created_at).fromNow(),
      price: order.items.reduce((total, item) => total + (item.quantity * item.typeSize.price), 0.0),
    })),
  }
  ));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OrdersActions.loadOrdersRequest());
  }, [dispatch]);

  return (
    <MainContainer>
      <Header>
        <LeftButton onPress={() => NavigationService.goBack()}>
          <LeftIcon />
        </LeftButton>
        <Title>My Orders</Title>
      </Header>
      <ContentContainer loading={orders.loading}>
        <OrdersList
          data={orders.data}
          keyExtractor={order => String(order.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: order }) => (
            <OrderItem key={order.id}>
              <OrderName>{`Order #${order.id}`}</OrderName>
              <OrderTime>{order.date}</OrderTime>
              <OrderPrice>{`$${order.price.toFixed(2)}`}</OrderPrice>
            </OrderItem>
          )}
        />
      </ContentContainer>
    </MainContainer>
  );
}
