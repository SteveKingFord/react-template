/*
 * @Author: kingford
 * @Date: 2021-03-30 12:31:03
 * @LastEditTime: 2021-07-17 13:40:34
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Pubmed } from './pages/pubmed';
import { Fibrosis } from './pages/fibrosis';
import { Material } from './pages/material';
import { AppHeader } from './pages/Layout/Header';
import { AppFooter } from './pages/Layout/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <AppHeader></AppHeader>
        <Switch>
          <Route exact path="/" component={Pubmed}></Route>
          <Route exact path="/pubmed/fibrosis" component={Fibrosis}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/material" component={Material}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="*" component={Pubmed}></Route>
        </Switch>
        <AppFooter></AppFooter>
      </Router>
    </div>
  );
};

export default App;
