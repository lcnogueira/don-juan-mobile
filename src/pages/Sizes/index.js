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
import SizesActions from '~/store/ducks/sizes';

class Sizes extends Component {
  static propTypes = {
    typeId: PropTypes.number.isRequired,
    loadSizesRequest: PropTypes.func.isRequired,
    sizes: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      data: PropTypes.arrayOf(PropTypes.shape({

      })),
    }).isRequired,
  }

  componentDidMount() {
    const { typeId, loadSizesRequest } = this.props;

    loadSizesRequest(typeId);
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

const mapStateToProps = ({ sizes }, { navigation }) => ({
  typeId: navigation.state.params.type.id,
  sizes: {
    ...sizes,
    data: sizes.data.map(size => ({
      id: size.size.id,
      name: size.size.name,
      price: size.price,
      image: size.size.file.url,
    })),
  },
});

const mapDispatchToProps = dispatch => bindActionCreators(SizesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sizes);
