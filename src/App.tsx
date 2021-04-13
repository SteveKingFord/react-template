/*
 * @Author: kingford
 * @Date: 2021-03-30 12:31:03
 * @LastEditTime: 2021-04-13 22:40:33
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Pubmed } from './pages/pubmed';
import { Material } from './pages/material';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Pubmed}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/material" component={Material}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="*" component={Pubmed}></Route>
      </Switch>
    </Router>
  );
};

export default App;
