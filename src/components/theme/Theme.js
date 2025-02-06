import React from 'react';
import {createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { purple } from '@mui/material/colors'

const colorContrast = blue[900];

export const themeLight = createTheme({
  palette: {
    primary: {
      light: blue[100],
      main: blue[200],
      dark: blue[300],
      contrastText: colorContrast,
    },
    secondary: {
      light: purple[100],
      main: purple[500],
      dark: purple[600],
      contrastText: '#ffff',      
    },
    background: {
      default: "#e4f0e2"
    },
  }
});

