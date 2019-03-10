import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import PeoplePage from "./PeoplePage";
import Page from "./Page";

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
    const search = this.state.search;

    return (
      <div className="App">
        <h1>Star Wars</h1>
        <input
          className="Query"
          type="text"
          onChange={event => {
            this.handleFilter("query", event.target.value);
          }}
          defaultChecked
        />
        <NavLink to="/people">People</NavLink>
        <NavLink to="/planets">Planets</NavLink>
        <NavLink to="/species">Species</NavLink>
        <NavLink to="/vehicles">Vehicles</NavLink>
        <NavLink to="/starships">Starships</NavLink>
        <section>
          <Switch>
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
