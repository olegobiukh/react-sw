import React from "react";
import { NavLink } from "react-router-dom";

const Rows = ({ visibleItems, config, api }) =>
  visibleItems &&
  visibleItems.map(item => (
    <tr key={item.url}>
      {Object.keys(config[api]).map(prop => {
        const index = item.url.match(/\d+/g)[0];
        return (
          <Cell key={prop} prop={prop} index={index} api={api} item={item} />
        );
      })}
    </tr>
  ));

const Cell = ({ prop, index, api, item }) => (
  <td>
    {prop === "name" || prop === "title" ? (
      <NavLink to={`/${api}/${index}`}>{item[prop]}</NavLink>
    ) : (
      item[prop]
    )}
  </td>
);

export default Rows;
