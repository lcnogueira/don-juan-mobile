import React from 'react';
import PropTypes from 'prop-types';

import { Center, Loading } from '~/styles/components';

const ContentContainer = ({ children, loading = false }) => (
  <>
    {loading ? (
      <Center>
        <Loading />
      </Center>
    ) : (
      children
    )}
  </>
);

ContentContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  loading: PropTypes.bool,
};

ContentContainer.defaultProps = {
  loading: false,
};

export default ContentContainer;
