import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import MainContainer from '~/components/MainContainer';
import ContentContainer from '~/components/ContentContainer';
import NavigationService from '~/services/navigation';

import {
  LeftButton, LeftIcon, Title, Ammount, CartItem, ProductImage, Info, MessageContainer, EmptyMessage, Form, AmountInput, Name, Size, Price, DeleteButton, DeleteIcon, ButtonsContainer, ShoppingButton, ShoppingIcon, OrderButton, OrderText, RightIcon,
} from './styles';
import { Header, List as CartList } from '~/styles/components';

import CartActions from '~/store/ducks/cart';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const totalAmount = useSelector(state => (state.cart.data.length > 0 ? state.cart.data.reduce((total, product) => total + product.price * product.quantity, 0) : 0));
  const dispatch = useDispatch();

  function confirmDelete(product) {
    Alert.alert('Remove item', 'Are you sure you want to delete this item?', [
      { text: 'No' },
      { text: 'Yes', onPress: () => dispatch(CartActions.removeProduct(product)) },
    ],
    { cancelable: false });
  }

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
        {cart.data.length > 0
          ? (
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
                      onChangeText={text => dispatch(CartActions.updateProduct(product.id, Number(text)))}
                    >
                      {product.amount}
                    </AmountInput>
                    <DeleteButton onPress={() => confirmDelete(product)}>
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
          )
          : (
            <MessageContainer>
              <EmptyMessage>There are no products in the cart.</EmptyMessage>
            </MessageContainer>
          )
        }
      </ContentContainer>
    </MainContainer>
  );
}
