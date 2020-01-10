import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../layout/Layout';
import MainPage from '../view/MainPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <Layout {...props}>
            <MainPage />
          </Layout>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
