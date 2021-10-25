import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Header from './Header';
import Home from './Home';
import Post from './Post';
import Error404 from './Error404';

export default function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <Main>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/post/:id" component={Post} />
            <Route path='/about' component={About} />
            <Route component={Error404}></Route>
          </Switch>
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

