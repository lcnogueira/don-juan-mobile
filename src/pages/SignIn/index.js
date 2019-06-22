import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Platform } from 'react-native';
import {
  BackgroundWrapper, ContainerAvoidingView, Gradient, InnerContainer, Logo,
} from './styles';
import {
  Label, Input, Button, ButtonText,
} from '~/styles/components';

import logo from '~/assets/images/logo3x.png';
import background from '~/assets/images/background.png';

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
      <BackgroundWrapper source={background}>
        <Gradient>
          <InnerContainer>
            <Logo source={logo} />
            <Input
              placeholder="Your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
              returnKeyType="next"
              onSubmitEditing={() => passwordInput.focus()}
              underlineColorAndroid="transparent"
            />
            <Input
              placeholder="Secret password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="send"
              ref={(el) => { passwordInput = el; }}
              onSubmitEditing={handleSubmit}
              underlineColorAndroid="transparent"
            />
            <Button onPress={handleSubmit}>
              <ButtonText>Sign In</ButtonText>
            </Button>
            <Label>
              Create free account
            </Label>
          </InnerContainer>
        </Gradient>
      </BackgroundWrapper>
    </ContainerAvoidingView>
  );
}

SignIn.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);
