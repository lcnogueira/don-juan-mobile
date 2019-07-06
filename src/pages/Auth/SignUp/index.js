import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Platform } from 'react-native';
import {
  BackgroundWrapper, ContainerAvoidingView, Gradient, InnerContainer, Logo,
} from '../styles';
import {
  LinkButton, Input, Button, ButtonText,
} from '~/styles/components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import NavigationService from '~/services/navigation';

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
      <BackgroundWrapper>
        <Gradient>
          <InnerContainer>
            <Logo />
            <Input
              placeholder="Complete name"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
              autoCorrect={false}
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
            <LinkButton onPress={() => NavigationService.navigate('SignIn')}>
              <ButtonText>Already have an account</ButtonText>
            </LinkButton>
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
