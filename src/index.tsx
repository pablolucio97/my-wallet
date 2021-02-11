import React from 'react'

import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import App from './App'

import { ThemeProvider } from './hooks/theme'
import { AuthProvider } from './hooks/auth'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
