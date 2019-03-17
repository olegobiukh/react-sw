import React from "react";

import PageCategory from "./PageCategory";

const PageCategories = ({ data, dataDisplayOut }) => {
  return (
    <div className="grid">
      {data &&
        dataDisplayOut.map((category, clue) => {
          return (
            data.hasOwnProperty(category) &&
            data[category].length !== 0 && (
              <PageCategory key={clue} data={data} category={category} />
            )
          );
        })}
    </div>
  );
};

export default PageCategories;
