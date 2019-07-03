import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';

import MainContainer from '~/components/MainContainer';
import NavigationService from '~/services/navigation';

import {
  Input, Header,
} from '~/styles/components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrdersActions from '~/store/ducks/orders';
import cep from 'cep-promise';

import {
  LeftButton, LeftIcon, Title, Ammount, ContainerAvoidingView, ButtonsContainer, CompleteButton, CompleteText, RightIcon, NoteInput, InnerView,
} from './styles';


function Order({ totalAmount, cart, createOrderRequest }) {
  const [note, setNote] = useState('');
  const [zip, setZip] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  let zipInput;
  let streetInput;
  let numberInput;
  let districtInput;

  function handleSubmit() {
    const order = {
      note,
      zip_code: zip,
      street,
      number,
      district,
      delivered: false,
      items: cart.data.map(item => ({
        type_size_id: item.id,
        quantity: item.quantity,
      })),
    };

    createOrderRequest(order);
  }

  async function onZipTyped() {
    try {
      if (zip) {
        setLoadingSpinner(true);
        const res = await cep(zip);
        setTimeout(() => {
          setLoadingSpinner(false);
        }, 4000);
        setStreet(res.street);
        setDistrict(res.neighborhood);
        setLoadingSpinner(false);
      } else {
        streetInput.focus();
      }
    } catch (error) {
      setLoadingSpinner(false);
    }
  }

  return (
    <MainContainer>
      <Spinner
        visible={loadingSpinner}
      />
      <Header>
        <LeftButton onPress={() => NavigationService.goBack()}>
          <LeftIcon />
        </LeftButton>
        <Title>Place order</Title>
        <Ammount>{`$${totalAmount.toFixed(2)}`}</Ammount>
      </Header>
      <ContainerAvoidingView>
        <InnerView>
          <NoteInput
            placeholder="Any notes?"
            value={note}
            onChangeText={setNote}
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
            onSubmitEditing={() => zipInput.focus()}
            multiline
            numberOfLines={6}
          />
          <Input
            placeholder="What is your ZIP Code?"
            value={zip}
            onChangeText={setZip}
            keyboardType="numeric"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={text => onZipTyped(text)}
            ref={(el) => { zipInput = el; }}
            underlineColorAndroid="transparent"

          />
          <Input
            placeholder="Street"
            value={street}
            onChangeText={setStreet}
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => numberInput.focus()}
            ref={(el) => { streetInput = el; }}
            underlineColorAndroid="transparent"
          />
          <Input
            placeholder="Nº"
            value={number}
            onChangeText={setNumber}
            keyboardType="numeric"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => districtInput.focus()}
            ref={(el) => { numberInput = el; }}
            underlineColorAndroid="transparent"
          />
          <Input
            placeholder="District"
            value={district}
            onChangeText={setDistrict}
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            ref={(el) => { districtInput = el; }}
            underlineColorAndroid="transparent"
          />
          <ButtonsContainer>
            <CompleteButton onPress={handleSubmit}>
              <CompleteText>FINISH</CompleteText>
              <RightIcon />
            </CompleteButton>
          </ButtonsContainer>
        </InnerView>
      </ContainerAvoidingView>
    </MainContainer>
  );
}

Order.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  cart: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        quantity: PropTypes.number,
      }),
    ),
  }).isRequired,
  createOrderRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
  totalAmount: state.cart.data.length > 0 ? state.cart.data.reduce((total, product) => total + product.price * product.quantity, 0) : 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Order);
