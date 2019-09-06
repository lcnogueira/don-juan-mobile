import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { Alert } from 'react-native';
import cep from 'cep-promise';

import MainContainer from '~/components/MainContainer';
import NavigationService from '~/services/navigation';

import {
  Input, Header,
} from '~/styles/components';

import OrdersActions from '~/store/ducks/orders';

import {
  LeftButton, LeftIcon, Title, Ammount, ContainerAvoidingView, ButtonsContainer, CompleteButton, CompleteText, RightIcon, NoteInput, InnerView,
} from './styles';

export default function Order() {
  const [note, setNote] = useState('');
  const [zip, setZip] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const cart = useSelector(state => state.cart);
  const totalAmount = useSelector(state => (state.cart.data.length > 0 ? state.cart.data.reduce((total, product) => total + product.price * product.quantity, 0) : 0));
  const dispatch = useDispatch();

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

    if (!number || !street || !district) {
      Alert.alert('Required data', 'The street, number and district data are required');
    } else {
      dispatch(OrdersActions.createOrderRequest(order));
    }
  }

  async function onZipTyped() {
    try {
      if (zip) {
        setLoadingSpinner(true);
        setTimeout(() => {
          setLoadingSpinner(false);
        }, 3000);
        const res = await cep(zip);
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
