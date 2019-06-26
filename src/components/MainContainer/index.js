import React from 'react';
import PropTypes from 'prop-types';

import { Container, Background } from './styles';

import header from '~/assets/images/headerBackground.png';

const MainContainer = ({ children }) => (
  <Container>
    <Background source={header} />
    {children}
  </Container>
);

MainContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};

export default MainContainer;
