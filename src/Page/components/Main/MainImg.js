import React from "react";

const MainImg = ({ api, id }) => {
  const handleBigImgError = event => {
    event.target.onError = null;
    event.target.src =
      "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    event.target.height = "400";
    event.target.width = "100";
  };

  return (
    <div className="Page__img-big">
      <img
        src={`https://starwars-visualguide.com/assets/img/${
          api !== "people" ? api : "characters"
        }/${id}.jpg`}
        alt="star wars"
        onError={handleBigImgError.bind(this)}
      />
    </div>
  );
};

export default MainImg;
