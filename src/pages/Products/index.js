import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainContainer from '~/components/MainContainer';
import ContentContainer from '~/components/ContentContainer';
import NavigationService from '~/services/navigation';

import {
  LeftButton, HistoryIcon, RightButton, ShoppingIcon, Title, ProductItem, ProductImage, Info, Description, Name, TimeInfo, TimeIcon, Time, BadgeText, BadgeView,
} from './styles';
import { Header, List as ProductsList } from '~/styles/components';
import LogoutButton from '~/components/LogoutButton';

import ProductsActions from '~/store/ducks/products';

export default function Products() {
  const products = useSelector(state => state.products);
  const cartSize = useSelector(state => state.cart.data.length || 0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductsActions.loadProductsRequest());
  }, [dispatch]);

  return (
    <MainContainer>
      <Header>
        <LeftButton onPress={() => NavigationService.navigate('Orders')}>
          <HistoryIcon />
        </LeftButton>
        <Title>Don Juan Pizzeria</Title>
        <RightButton onPress={() => NavigationService.navigate('Cart')}>
          <ShoppingIcon />
          {!!cartSize && (
            <BadgeView>
              <BadgeText>{cartSize}</BadgeText>
            </BadgeView>
          )}
        </RightButton>
      </Header>
      <ContentContainer loading={products.loading}>
        <ProductsList
          data={products.data}
          keyExtractor={product => String(product.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: product }) => (
            <ProductItem key={product.id} onPress={() => NavigationService.navigate('Types', { product })}>
              <ProductImage source={{ uri: product.file.url }} />
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
      </ContentContainer>
      <LogoutButton />
    </MainContainer>
  );
}
