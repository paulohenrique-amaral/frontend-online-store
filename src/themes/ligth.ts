import { purple } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const ligthTheme = createTheme({
  palette: {
    primary: {
      main: purple[700],
      dark: purple[800],
      light: purple[500],
      contrastText: '#fffffe',
    },
    secondary: {
      main: '#FFE600',
      // dark: '#ab003c',
      // light: '#f73378',
    },
    success: {
      main: '#ff6e6c',
    },
    background: {
      default: '#EBEBEB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2b2c34',
      secondary: '#fffffe',
    },
  },
});

const theme = responsiveFontSizes(ligthTheme);

export default theme;
