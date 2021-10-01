import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={SearchPage} path="/search" />
          <Route component={ErrorPage} path="/:rest*" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
