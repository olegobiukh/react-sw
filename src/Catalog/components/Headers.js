import React from "react";

const Headers = ({ config, api, onHeaderClick }) => (
  <tr className="thead-dark">
    {api &&
      Object.entries(config[api]).map(([key, value]) => (
        <th
          key={key}
          className={value.isSortable ? "sortable-column" : ""}
          onClick={() => onHeaderClick(api, key)}
        >
          {value.title}
        </th>
      ))}
  </tr>
);

export default Headers;
