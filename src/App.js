import React from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

import Catalog from "./Catalog";
import Page from "./Page";
import Home from "./Home";

const App = () => {
  return (
    <>
      <div className="stars" />
      <div className="twinkling" />
      <div className="Catalog">
        <NavLink to="/" className="Logo">
          <div className="Logo__title">star</div>
          <div className="Logo__title">wars</div>
        </NavLink>
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
