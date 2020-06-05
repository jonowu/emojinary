/**
 * Uses - https://github.com/rebassjs/grid
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex, Box } from 'reflexbox';

const StyledRow = styled(Flex)`
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  ${(props) =>
    props.fillSpace &&
    `
    ${Box} {
      flex: 1 1 auto;
      width: 100%;
    }
  `};
`;

const Row = (props) => <StyledRow {...props} />;

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
