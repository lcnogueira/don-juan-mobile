import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

import MainContainer from '~/components/MainContainer';
import ContentContainer from '~/components/ContentContainer';
import NavigationService from '~/services/navigation';

import {
  LeftButton, LeftIcon, Title, Ammount, CartList, CartItem, ProductImage, Info, Form, AmountInput, Name, Size, Price, DeleteButton, DeleteIcon, ButtonsContainer, ShoppingButton, ShoppingIcon, OrderButton, OrderText, RightIcon,
} from './styles';
import { Header } from '~/styles/components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
        size: PropTypes.string,
        price: PropTypes.number,
      })),
    }).isRequired,
    totalAmount: PropTypes.number.isRequired,
    removeProduct: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
  }

  confirmDelete = (product) => {
    const { removeProduct } = this.props;

    Alert.alert('Remove item', 'Are you sure you want to delete this item?', [
      { text: 'Cancel' },
      { text: 'Yes', onPress: () => removeProduct(product) },
    ]);
  };

  render() {
    const { cart, totalAmount, updateProduct } = this.props;
    return (
      <MainContainer>
        <Header>
          <LeftButton onPress={() => NavigationService.goBack()}>
            <LeftIcon />
          </LeftButton>
          <Title>Cart</Title>
          <Ammount>{`$${totalAmount.toFixed(2)}`}</Ammount>
        </Header>
        <ContentContainer>
          <CartList
            data={cart.data}
            keyExtractor={product => String(product.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: product }) => (
              <CartItem key={product.id}>
                <ProductImage source={{ uri: product.image }} />
                <Info>
                  <Name>{product.name}</Name>
                  <Size>{product.size}</Size>
                  <Price>{`$${product.price.toFixed(2)}`}</Price>
                </Info>
                <Form>
                  <AmountInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    defaultValue={String(product.quantity)}
                    maxLength={2}
                    keyboardType="numeric"
                    onChangeText={text => updateProduct(product.id, Number(text))
                    }
                  >
                    {product.amount}
                  </AmountInput>
                  <DeleteButton onPress={() => this.confirmDelete(product)}>
                    <DeleteIcon />
                  </DeleteButton>
                </Form>
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
        </ContentContainer>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  totalAmount: state.cart.data.length > 0 ? state.cart.data.reduce((total, product) => total + product.price * product.quantity, 0) : 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
