import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
        main: 'rgb(0, 147, 167)',
      },
  },
  shadows: Array(25).fill('none'),
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  }
});

export default theme;