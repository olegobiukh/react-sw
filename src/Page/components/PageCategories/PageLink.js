import React from "react";
import { NavLink } from "react-router-dom";

const PageLink = ({ category, index, item }) => {
  return (
    <p>
      <NavLink
        to={`/${
          /(characters|people|pilots|residents)/gi.test(category)
            ? "people"
            : category
        }/${index}`}
      >
        {item.name || item.title}
      </NavLink>
    </p>
  );
};

export default PageLink;
