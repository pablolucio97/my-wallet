import React from 'react'

import GlobalStyle from './styles/GlobalStyle'
import Routes from './routes/index'

import {ThemeProvider} from 'styled-components'

import {useTheme} from './hooks/theme'


const App : React.FC = () => {

  const {theme} = useTheme()

  return (
    <ThemeProvider theme={theme}>
     <GlobalStyle/>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
