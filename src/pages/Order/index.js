import React, { useState } from 'react';

import { Platform } from 'react-native';

import MainContainer from '~/components/MainContainer';
import NavigationService from '~/services/navigation';

import {
  Input,
} from '~/styles/components';

import {
  Header, LeftButton, LeftIcon, Title, Ammount, ContainerAvoidingView, Form, ButtonsContainer, CompleteButton, CompleteText, RightIcon, ObservationInput,
} from './styles';

function Order() {
  const [observation, setObservation] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');

  let zipInput;
  let cityInput;
  let streetInput;
  let numberInput;
  let districtInput;

  function handleSubmit() {

  }

  return (
    <MainContainer>
      <Header>
        <LeftButton onPress={() => NavigationService.goBack()}>
          <LeftIcon />
        </LeftButton>
        <Title>Make order</Title>
        <Ammount>$107.00</Ammount>
      </Header>
      <ContainerAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Form>
          <ObservationInput
            placeholder="Any observation?"
            value={observation}
            onChangeText={setObservation}
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
            onSubmitEditing={() => cityInput.focus()}
            ref={(el) => { zipInput = el; }}
            underlineColorAndroid="transparent"
          />
          <Input
            placeholder="City"
            value={city}
            onChangeText={setCity}
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => streetInput.focus()}
            ref={(el) => { cityInput = el; }}
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
              <CompleteText>COMPLETE</CompleteText>
              <RightIcon />
            </CompleteButton>
          </ButtonsContainer>
        </Form>
      </ContainerAvoidingView>
    </MainContainer>
  );
}

export default Order;
