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
  }
  render() {
    const search = this.state.search;
    // console.log(typeof search);

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
        <NavLink to={{ pathname: "/people", search: search }}>People</NavLink>
        <NavLink to={{ pathname: "/planets", search: `?search=${search}` }}>
          Planets
        </NavLink>
        <NavLink to={{ pathname: "/species", search: `?search=${search}` }}>
          Species
        </NavLink>
        <NavLink to={{ pathname: "/vehicles", search: `?search=${search}` }}>
          Vehicles
        </NavLink>
        <NavLink
          to={{
            pathname: "/starships",
            search: `?search=${search}`
          }}
        >
          Starships
        </NavLink>
        <section>
          <Switch>
            <Route exact path="/:category" component={PeoplePage} />
            <Route exact path="/:category/:id" component={Page} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
