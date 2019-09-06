import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import MainContainer from '~/components/MainContainer';
import ContentContainer from '~/components/ContentContainer';
import NavigationService from '~/services/navigation';

import {
  LeftButton, LeftIcon, Title, TypeItem, TypeImage, Name,
} from './styles';
import { Header, List as TypesList } from '~/styles/components';

import TypesActions from '~/store/ducks/types';

export default function Types({ navigation }) {
  const types = useSelector(state => state.types);
  const productId = navigation.state.params.product.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TypesActions.loadTypesRequest(productId));
  }, [dispatch, productId]);

  return (
    <MainContainer>
      <Header>
        <LeftButton onPress={() => NavigationService.goBack()}>
          <LeftIcon />
        </LeftButton>
        <Title>Choose a type</Title>
      </Header>
      <ContentContainer loading={types.loading}>
        <TypesList
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

Types.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
