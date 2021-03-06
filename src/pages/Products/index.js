import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainContainer from '~/components/MainContainer';
import ContentContainer from '~/components/ContentContainer';
import NavigationService from '~/services/navigation';

import {
  LeftButton, HistoryIcon, RightButton, ShoppingIcon, Title, ProductItem, ProductImage, Info, Description, Name, TimeInfo, TimeIcon, Time, BadgeText, BadgeView,
} from './styles';
import { Header, List as ProductsList } from '~/styles/components';
import LogoutButton from '~/components/LogoutButton';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';

class Products extends Component {
  static propTypes = {
    loadProductsRequest: PropTypes.func.isRequired,
    products: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        time: PropTypes.number,
        file: PropTypes.shape({
          url: PropTypes.string,
        }),
      })),
    }).isRequired,
    cartSize: PropTypes.number.isRequired,
  }

  componentDidMount() {
    const { loadProductsRequest } = this.props;

    loadProductsRequest();
  }

  render() {
    const { products, cartSize } = this.props;

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
}

const mapStateToProps = state => ({
  products: state.products,
  cartSize: state.cart.data.length || 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
