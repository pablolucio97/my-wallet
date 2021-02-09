import React from 'react'

import GlobalStyle from './styles/GlobalStyle'
import Routes from './routes/app.routes'

import {ThemeProvider} from 'styled-components'
import dark from './themes/dark'


const App : React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
     <GlobalStyle/>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
