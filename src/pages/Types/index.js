import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainContainer from '~/components/MainContainer';
import ContentContainer from '~/components/ContentContainer';
import NavigationService from '~/services/navigation';

import {
  LeftButton, LeftIcon, Title, TypeList, TypeItem, TypeImage, Name,
} from './styles';
import { Header } from '~/styles/components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TypesActions from '~/store/ducks/types';

class Types extends Component {
  static propTypes = {
    productId: PropTypes.number.isRequired,
    loadTypesRequest: PropTypes.func.isRequired,
    types: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        file: PropTypes.shape({
          url: PropTypes.string,
        }),
      })),
    }).isRequired,
  }

  componentDidMount() {
    const { productId, loadTypesRequest } = this.props;

    loadTypesRequest(productId);
  }

  render() {
    const { types } = this.props;

    return (
      <MainContainer>
        <Header>
          <LeftButton onPress={() => NavigationService.goBack()}>
            <LeftIcon />
          </LeftButton>
          <Title>Choose a type</Title>
        </Header>
        <ContentContainer loading={types.loading}>
          <TypeList
            data={types.data}
            keyExtractor={type => String(type.id)}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: type }) => (
              <TypeItem key={type.id} onPress={() => NavigationService.navigate('Sizes', { type })}>
                <TypeImage source={{ uri: type.file.url }} />
                <Name>{type.name}</Name>
              </TypeItem>
            )
            }
          />
        </ContentContainer>
      </MainContainer>
    );
  }
}

const mapStateToProps = (state, { navigation }) => ({
  types: state.types,
  productId: navigation.state.params.product.id,
});

const mapDispatchToProps = dispatch => bindActionCreators(TypesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Types);
