import React from "react";

const MainData = ({ api, id, data, dataDisplayNot, dataDisplayOut }) => {
  return (
    <div className="Page__data">
      {data ? (
        Object.keys(data).map((key, order) => {
          if (
            !dataDisplayNot.includes(key) &&
            !dataDisplayOut.includes(key) &&
            data[key] !== "unknown"
          ) {
            if (key === "name" || key === "title") {
              return <h1 key={order}>{data[key]}</h1>;
            } else {
              return (
                <p key={key}>
                  <span className={key === "opening_crawl" ? "Page__key" : ""}>
                    {key}:
                  </span>
                  {data[key]}
                </p>
              );
            }
          }
        })
      ) : (
        <div className="loading" />
      )}
    </div>
  );
};

export default MainData;
