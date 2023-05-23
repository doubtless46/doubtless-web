import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontSize: '24px',
    },
    h2: {
      fontSize: '20px',
    },
    h3: {
      fontSize: '16px',
    },
  },
});

export default theme;