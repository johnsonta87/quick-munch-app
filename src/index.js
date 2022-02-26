import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store/store';

import App from './App';

// Styled Components
import GlobalStyles from './styles/global.styles';
import { theme } from './styles/theme.styles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
