import React, { Component } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import PeoplePage from "./PeoplePage";
import Page from "./Page";
import Home from "./components/Home";

import "./App.css";

class App extends Component {
  state = {
    search: ""
  };

  handleFilter(value, search) {
    this.setState({ search });
    const currentUrl = window.location.pathname.match(/\w+/g);
    const stateObj = { search: search };

    const url =
      search.length === 0
        ? currentUrl
        : currentUrl && currentUrl + "?search=" + search;

    window.history.pushState(stateObj, "url", url);
  }

  render() {
    return (
      <div className="App">
        <h1>Star Wars</h1>
        <input
          className="float-right"
          type="text"
          onChange={event => {
            this.handleFilter("query", event.target.value);
          }}
          placeholder="Search"
          defaultChecked
        />
        <div className="float-left List">
          <ul>
            <li>
              <NavLink to="/people">People</NavLink>
            </li>
            <li>
              <NavLink to="/planets">Planets</NavLink>
            </li>
            <li>
              <NavLink to="/species">Species</NavLink>
            </li>
            <li>
              <NavLink to="/vehicles">Vehicles</NavLink>
            </li>
            <li>
              <NavLink to="/starships">Starships</NavLink>
            </li>
          </ul>
        </div>
        <section className="Catalog float-left">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/home" component={Home} />}
            />
            <Route exact path="/home" component={Home} />
            <Route
              history={this.props.history}
              exact
              path="/:category"
              component={PeoplePage}
            />
            <Route exact path="/:category/:id" component={Page} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
