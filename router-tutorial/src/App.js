import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>          
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
    </div>
  );
}

export default App;