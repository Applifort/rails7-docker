import React from 'react';
import PropTypes from 'prop-types';
import { StylesProvider, jssPreset } from '@mui/styles';
import { ThemeProvider as MUIThemeProvider } from '@mui/system';

import CssBaseline from '@mui/material/CssBaseline';
import { create } from 'jss';

import theme from './theme';

const jss = create({ ...jssPreset() });

const ThemeProvider = ({ children }) => (
    <MUIThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        {children}
      </StylesProvider>
    </MUIThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

ThemeProvider.defaultProps = {
  children: null,
};

export default ThemeProvider;
