import React from "react";

import PageImg from "./PageImg";
import PageLink from "./PageLink";

const PageCategory = ({ data, category }) => {
  return (
    <div className="Page-Category">
      <div className="Page-Category__title">
        <strong>Related {category}</strong>
      </div>
      {data[category].map((item, i) => {
        const index = item.url
          ? item.url.match(/\d+/g)[0]
          : item.match(/\d+/g)[0];

        return (
          <div key={i} className="Page-Category__box">
            <PageImg category={category} index={index} />
            <PageLink category={category} index={index} item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default PageCategory;
