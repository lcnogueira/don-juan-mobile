import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import MainContainer from '~/components/MainContainer';
import ContentContainer from '~/components/ContentContainer';
import NavigationService from '~/services/navigation';

import {
  LeftButton, LeftIcon, Title, OrderItem, OrderName, OrderTime, OrderPrice,
} from './styles';
import { Header, List as OrdersList } from '~/styles/components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrdersActions from '~/store/ducks/orders';

class Orders extends Component {
  static propTypes = {
    loadOrdersRequest: PropTypes.func.isRequired,
    orders: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        date: PropTypes.date,
        price: PropTypes.number,
      })),
    }).isRequired,
  }

  componentDidMount() {
    const { loadOrdersRequest } = this.props;

    loadOrdersRequest();
  }

  render() {
    const { orders } = this.props;

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
}

const mapStateToProps = ({ orders }) => ({
  orders: {
    ...orders,
    data: orders.data.map(order => ({
      id: order.id,
      date: moment(order.created_at).fromNow(),
      price: order.items.reduce((total, item) => total + (item.quantity * item.typeSize.price), 0.0),
    })),
  },
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
