/**
 * Default column with Swisse grid margin settings
 * Uses - https://github.com/rebassjs/grid
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'reflexbox';

const toPercent = (v) => `${v * 100}%`;

const Col = ({ offset, ...props }) => <Box ml={offset.map(toPercent)} px={'0.25rem'} {...props} />;

Col.propTypes = {
  offset: PropTypes.arrayOf(PropTypes.number),
  children: PropTypes.node.isRequired,
};

Col.defaultProps = {
  offset: [],
};

export default Col;
