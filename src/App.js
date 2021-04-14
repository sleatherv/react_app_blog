import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Header from './components/Header';
import Home from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <Main>
          <Route path="/" exact={true} component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path='/about' component={About} />

        </Main>
      </MainContainer>
    </BrowserRouter>
  )
}

const MainContainer = styled.div`
    padding: 40px;
    width: 90%;
    max-width: 700px;
`;

const Main = styled.main`
  background:#fff;
  padding: 40px;
  border-radius:10px;
`;

