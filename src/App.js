import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>My personal blog</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>
          <Route path="/" exact={true}>
            <div>
              <h2>Home page</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Route>
          <Route path="/blog">
            <div>
              <h2>Blog</h2>
              <ul>
                <li>Article 1</li>
                <li>Article 2</li>
                <li>Article 3</li>
              </ul>
            </div>
          </Route>
          <Route path='/about'>
            <div>
              <h2>About</h2>
              <ul>
                <p>Hi, I'm Sleather</p>
              </ul>
            </div>
          </Route>
        </main>
      </div>
    </BrowserRouter>
  )
}
