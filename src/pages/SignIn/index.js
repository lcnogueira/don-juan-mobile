import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Platform, View } from 'react-native';
import { ContainerAvoidingView, Title } from './styles';
import {
  Label, Input, Button, ButtonText,
} from '~/styles/components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';


function SignIn({ signInRequest }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let passwordInput;

  function handleSubmit() {
    signInRequest(email, password);
  }

  return (
    <ContainerAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <View>
        <Title>SignIn</Title>
        <Label>E-MAIL</Label>
        <Input
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => passwordInput.focus()}
        />
        <Label>PASSWORD</Label>
        <Input
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="send"
          ref={(el) => { passwordInput = el; }}
          onSubmitEditing={handleSubmit}
        />
        <Button onPress={handleSubmit}>
          <ButtonText>SignIn</ButtonText>
        </Button>
      </View>

    </ContainerAvoidingView>
  );
}

SignIn.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);
