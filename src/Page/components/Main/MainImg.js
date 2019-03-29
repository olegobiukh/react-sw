import React from "react";

const MainImg = ({ api, id }) => {
  const handleBigImgError = event => {
    event.target.onError = null;
    event.target.src =
      "https://raw.githubusercontent.com/olegobiukh/other/master/sw/img/big-placeholder.jpg";
    event.target.height = "400";
    event.target.width = "100";
  };

  return (
    <div className="Page__img-big">
      <img
        src={`https://raw.githubusercontent.com/olegobiukh/other/master/sw/img/${
          api
        }/${id}.jpg`}
        alt="star wars"
        onError={handleBigImgError.bind(this)}
      />
    </div>
  );
};

export default MainImg;
