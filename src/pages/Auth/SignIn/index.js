import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Platform } from 'react-native';
import {
  BackgroundWrapper, ContainerAvoidingView, Gradient, InnerContainer, Logo,
} from '../styles';
import {
  LinkButton, Input, Button, ButtonText, Loading,
} from '~/styles/components';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import NavigationService from '~/services/navigation';

function SignIn({ signInRequest, auth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let passwordInput;

  function handleSubmit() {
    signInRequest(email, password);
  }

  return (
    <BackgroundWrapper>
      <Gradient>
        <ContainerAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <InnerContainer>
            <Logo />
            <Input
              placeholder="Your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
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
              {auth.loading ? (
                <Loading light />
              ) : (
                <ButtonText>Sign In</ButtonText>
              )}
            </Button>
            <LinkButton onPress={() => NavigationService.navigate('SignUp')}>
              <ButtonText>Create free account</ButtonText>
            </LinkButton>
          </InnerContainer>
        </ContainerAvoidingView>
      </Gradient>
    </BackgroundWrapper>
  );
}

SignIn.propTypes = {
  signInRequest: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    loading: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
