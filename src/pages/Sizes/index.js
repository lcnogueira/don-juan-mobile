import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import MainContainer from '~/components/MainContainer';
import ContentContainer from '~/components/ContentContainer';
import NavigationService from '~/services/navigation';

import {
  LeftButton, LeftIcon, Title, SizeItem, SizeImage, Name, Price,
} from './styles';
import { Header, List as SizesList } from '~/styles/components';

import TypeSizesActions from '~/store/ducks/typeSizes';
import CartActions from '~/store/ducks/cart';

export default function Sizes({ navigation }) {
  const typeId = navigation.state.params.type.id;
  const sizes = useSelector(state => ({
    ...state.typeSizes,
    data: state.typeSizes.data.map(typeSize => ({
      id: typeSize.size.id,
      name: typeSize.size.name,
      price: typeSize.price,
      image: typeSize.size.file.url,
      cartProduct: {
        id: typeSize.id,
        name: typeSize.type.name,
        size: typeSize.size.name,
        image: typeSize.type.file.url,
        price: typeSize.price,
      },
    })),
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TypeSizesActions.loadTypeSizesRequest(typeId));
  }, [dispatch, typeId]);

  function addProductToCart(cartProduct) {
    dispatch(CartActions.addProduct(cartProduct));
    NavigationService.navigate('Cart');
  }

  return (
    <MainContainer>
      <Header>
        <LeftButton onPress={() => NavigationService.goBack()}>
          <LeftIcon />
        </LeftButton>
        <Title>Choose a size</Title>
      </Header>
      <ContentContainer loading={sizes.loading}>
        <SizesList
          data={sizes.data}
          keyExtractor={size => String(size.id)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: size }) => (
            <SizeItem key={size.id} onPress={() => addProductToCart(size.cartProduct)}>
              <SizeImage source={{ uri: size.image }} />
              <Name>{size.name}</Name>
              <Price>{`$${size.price.toFixed(2)}`}</Price>
            </SizeItem>
          )
          }
        />
      </ContentContainer>
    </MainContainer>
  );
}

Sizes.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
