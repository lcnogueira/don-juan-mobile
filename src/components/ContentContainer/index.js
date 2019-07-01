import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Center, Loading } from '~/styles/components';

const ContentContainer = ({ children, loading = false }) => (
  <Fragment>
    {loading ? (
      <Center>
        <Loading />
      </Center>
    ) : (
      children
    )}
  </Fragment>
);

ContentContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  loading: PropTypes.bool,
};

ContentContainer.defaultProps = {
  loading: false,
};

export default ContentContainer;
