import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components';

import theme from '../../constants/theme';
import GlobalStyle from '../../components/global-style';

const ThemeProvider = ({ children }) => (
  <ThemeProviderStyledComponents theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProviderStyledComponents>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
