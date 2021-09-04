import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/general/Navbar';
import Categories from './components/categories/Categories';
import MainBooks from './components/books/MainBooks';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <MainBooks />
      </Route>
      <Route path="/category">
        <Categories />
      </Route>
    </Switch>
  </Router>
);

export default App;
