import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";

import Catalog from "./components/Catalog";
import Page from "./components/Page";
import Home from "./components/Home";
import config from "./components/config";

const App = () => {
  return (
    <>
      <div className="float-left List">
        <ul>
          <li>
            <NavLink to="/" className="List__item">
              Home
            </NavLink>
          </li>
          {Object.keys(config).map((title, i) => (
            <li key={i}>
              <NavLink to={`/${title}`} className="List__item">
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="Catalog float-left">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home" component={Home} />}
          />
          <Route exact path="/home" component={Home} />
          <Route exact path="/:api" component={Catalog} />
          <Route exact path="/:api/:id" component={Page} />
        </Switch>
      </div>
    </>
  );
};

export default App;
