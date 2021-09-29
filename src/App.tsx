import React from 'react';
import { Route, Switch } from 'wouter';
import Header from './components/Header';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={SearchPage} path="/search/:camera/:sol?" />
        <Route component={ErrorPage} path="/:rest*" />
      </Switch>
    </div>
  );
};

export default App;
