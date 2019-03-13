import React from "react";
import { NavLink } from "react-router-dom";

const Rows = ({ visibleItems, config, api }) =>
  visibleItems &&
  visibleItems.map((item, i) => (
    <tr key={i}>
      {Object.keys(config[api]).map((prop, i) => {
        const index = item.url.match(/\d+/g)[0];

        return <Cell i={i} prop={prop} index={index} api={api} item={item} />;
      })}
    </tr>
  ));

const Cell = ({ i, prop, index, api, item }) => (
  <td key={index}>
    {prop === "name" || prop === "title" ? (
      <NavLink to={`/${api}/${index}`}>{item[prop]}</NavLink>
    ) : (
      item[prop]
    )}
  </td>
);

export default Rows;
