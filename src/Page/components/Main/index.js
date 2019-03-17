import React from "react";

import MainImg from "./MainImg";
import MainData from "./MainData";

const Main = ({ api, id, data, dataDisplayNot, dataDisplayOut }) => {
  return (
    <div className="Page">
      <MainImg api={api} id={id} />
      <MainData
        api={api}
        id={id}
        data={data}
        dataDisplayNot={dataDisplayNot}
        dataDisplayOut={dataDisplayOut}
      />
    </div>
  );
};

export default Main;
