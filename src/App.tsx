import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes';
import { GlobalStyles, Wrapper } from './styles/global';

const App: React.FC = () => (
  <Wrapper>
    <Header />
    <Router>
      <Routes />
    </Router>
    <GlobalStyles />
  </Wrapper>
);

export default App;
