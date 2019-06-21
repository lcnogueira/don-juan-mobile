import React from 'react';
import PropTypes from 'prop-types';

import { Platform } from 'react-native';

import {
  Content, RNModal, ContainerAvoidingView,
} from './styles';

const Modal = ({ visible, children, onRequestClose }) => (
  <RNModal visible={visible} onRequestClose={onRequestClose}>
    <ContainerAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Content>
        {children}
      </Content>
    </ContainerAvoidingView>
  </RNModal>
);

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};

export default Modal;
