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
      main: '#e45858',
      // dark: '#ab003c',
      // light: '#f73378',
    },
    background: {
      default: '#fffffe',
      paper: '#d1d1e9',
    },
    text: {
      primary: '#2b2c34',
      secondary: '#fffffe',
    },
  },
});

const theme = responsiveFontSizes(ligthTheme);

export default theme;
