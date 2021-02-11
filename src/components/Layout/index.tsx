import React from 'react';

import { Container } from './styles';

import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'

const Layout: React.FC = ({children}) => 
   (
    <Container>
      <MainHeader/>
      <Content>
        {children}
      </Content>
      <Aside/>
    </Container>

  );


export default Layout;