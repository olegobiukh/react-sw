import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Headers from "./components/Headers";
import Rows from "./components/Rows";

class Datatable extends Component {
  state = {
    sortColumn: null,
    sortAsc: true,
    api: ""
  };

  handleHeaderClick = (api, key) => {
    if (!this.props.config[api][key].isSortable) {
      return;
    }

    this.setState(({ sortColumn, sortAsc }) => {
      return {
        sortColumn: key,
        sortAsc: sortColumn === key ? !sortAsc : true
      };
    });
  };

  render() {
    const { api, data, config } = this.props;
    const sign = this.state.sortAsc ? 1 : -1;

    const visibleItems = this.state.sortColumn
      ? data.sort((item1, item2) => {
          const value1 = item1[this.state.sortColumn];
          const value2 = item2[this.state.sortColumn];

          return typeof value1 === "number"
            ? sign * (value1 - value2)
            : sign * value1.localeCompare(value2);
        })
      : data;

    return (
      <table className="table">
        <thead>
          <Headers
            config={config}
            api={api}
            onHeaderClick={this.handleHeaderClick}
          />
        </thead>
        <tbody>
          <Rows config={config} api={api} visibleItems={visibleItems} />
        </tbody>
      </table>
    );
  }
}

export default Datatable;
