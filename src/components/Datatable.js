import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import config from "./config";

class Datatable extends Component {
  state = {
    sortColumn: null,
    sortAsc: true,
    config,
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
    const { api, data } = this.props;

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

    const swHeaders =
      api &&
      Object.entries(config[api]).map(([key, value]) => (
        <th
          key={key}
          className={value.isSortable ? "sortable-column" : ""}
          onClick={() => this.handleHeaderClick(api, key)}
        >
          {value.title}
        </th>
      ));

    const swData =
      visibleItems &&
      visibleItems.map((item, i) => (
        <tr key={i}>
          {Object.keys(config[api]).map((prop, i) => {
            const index = item.url.match(/\d+/g)[0];

            return (
              <td key={i}>
                {prop === "name" || prop === "title" ? (
                  <NavLink to={`/${api}/${index}`}>{item[prop]}</NavLink>
                ) : (
                  item[prop]
                )}
              </td>
            );
          })}
        </tr>
      ));
    return (
      <table className="table">
        <thead>
          <tr className="thead-dark">{swHeaders}</tr>
        </thead>
        <tbody>{swData}</tbody>
      </table>
    );
  }
}

export default Datatable;
