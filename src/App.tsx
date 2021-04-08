/*
 * @Author: kingford
 * @Date: 2021-03-30 12:31:03
 * @LastEditTime: 2021-04-08 18:15:26
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </Router>
  );
};

export default App;
