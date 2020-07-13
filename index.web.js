import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';
import App from './web/src/App';
import customTheme from './core/utils/theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
