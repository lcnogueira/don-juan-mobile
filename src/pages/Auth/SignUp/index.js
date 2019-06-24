import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Platform } from 'react-native';
import {
  BackgroundWrapper, ContainerAvoidingView, Gradient, InnerContainer, Logo,
} from '../styles';
import {
  Label, Input, Button, ButtonText,
} from '~/styles/components';

import logo from '~/assets/images/logo3x.png';
import background from '~/assets/images/background.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

function SignUp({ signUpRequest }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  let passwordInput;
  let emailInput;

  function handleSubmit() {
    signUpRequest(name, email, password);
  }

  return (
    <ContainerAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <BackgroundWrapper source={background}>
        <Gradient>
          <InnerContainer>
            <Logo source={logo} />
            <Input
              placeholder="Complete name"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
              autoCorrect={false}
              autoFocus
              returnKeyType="next"
              onSubmitEditing={() => emailInput.focus()}
              underlineColorAndroid="transparent"
            />
            <Input
              placeholder="Your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              ref={(el) => { emailInput = el; }}
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
              <ButtonText>Create account</ButtonText>
            </Button>
            <Label>
              Already have an account
            </Label>
          </InnerContainer>
        </Gradient>
      </BackgroundWrapper>
    </ContainerAvoidingView>
  );
}

SignUp.propTypes = {
  signUpRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
