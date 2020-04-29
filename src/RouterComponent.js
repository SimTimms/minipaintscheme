import React from 'react';
import { Chaos } from './layouts/chaos';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route, withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

function RouterComponent(props) {
  const authToken = Cookies.get('token');
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Quicksand'].join(','),
      fontSize: 12,
    },
  });

  theme.typography.h1 = { fontFamily: ['Quicksand'].join(','), fontSize: 30 };
  theme.typography.h2 = { fontFamily: ['Quicksand'].join(','), fontSize: 18 };

  theme.palette.primary = {
    ...theme.palette.primary,
    main: '#57499e',
    light: '#8474d3',
    dark: '#433878',
  };
  theme.palette.secondary = {
    ...theme.palette.secondary,
    main: '#34BEB1',
    light: '#6aebde',
    dark: '#248c82',
  };
  theme.palette.error = {
    ...theme.palette.error,
    main: '#ff4081',
    dark: '#d81b60',
  };

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/">
          <Chaos />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default withRouter(RouterComponent);
