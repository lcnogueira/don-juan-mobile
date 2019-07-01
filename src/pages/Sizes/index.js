import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainContainer from '~/components/MainContainer';
import ContentContainer from '~/components/ContentContainer';
import NavigationService from '~/services/navigation';

import {
  LeftButton, LeftIcon, Title, SizeList, SizeItem, SizeImage, Name, Price,
} from './styles';
import { Header } from '~/styles/components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TypeSizesActions from '~/store/ducks/typeSizes';

class Sizes extends Component {
  static propTypes = {
    typeId: PropTypes.number.isRequired,
    loadTypeSizesRequest: PropTypes.func.isRequired,
    sizes: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      data: PropTypes.arrayOf(PropTypes.shape({

      })),
    }).isRequired,
  }

  componentDidMount() {
    const { typeId, loadTypeSizesRequest } = this.props;

    loadTypeSizesRequest(typeId);
  }

  render() {
    const { sizes } = this.props;

    return (
      <MainContainer>
        <Header>
          <LeftButton onPress={() => NavigationService.goBack()}>
            <LeftIcon />
          </LeftButton>
          <Title>Choose a size</Title>
        </Header>
        <ContentContainer loading={sizes.loading}>
          <SizeList
            data={sizes.data}
            keyExtractor={size => String(size.id)}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: size }) => (
              <SizeItem key={size.id} onPress={() => NavigationService.navigate('Cart')}>
                <SizeImage source={{ uri: size.image }} />
                <Name>{size.name}</Name>
                <Price>{`$${size.price}`}</Price>
              </SizeItem>
            )
            }
          />
        </ContentContainer>

      </MainContainer>
    );
  }
}

const mapStateToProps = ({ typeSizes }, { navigation }) => ({
  typeId: navigation.state.params.type.id,
  sizes: {
    ...typeSizes,
    data: typeSizes.data.map(typeSize => ({
      id: typeSize.size.id,
      name: typeSize.size.name,
      price: typeSize.price,
      image: typeSize.size.file.url,
    })),
  },
});

const mapDispatchToProps = dispatch => bindActionCreators(TypeSizesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sizes);
