/*
 * @Author: Ketong
 * @Date: 2021-07-12 11:32:21
 * @LastEditTime: 2021-07-21 16:49:37
 * @LastEditors: Ketong
 * @Description: Description
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import { routerConfig } from './router';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} />}
    />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact>
            <App />
        </Route>
        {routerConfig.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        {/* <Route path="/" exact>
          <App />
        </Route>
        <Route path="/index">
          <Index />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/my">
          <My />
        </Route> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
