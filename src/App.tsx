import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes';
import { GlobalStyles, Wrapper, Content } from './styles/global';

const App: React.FC = () => (
  <Wrapper>
    <Content>
      <Header />
      <Router>
        <Routes />
      </Router>
      <GlobalStyles />
    </Content>
  </Wrapper>
);

export default App;
