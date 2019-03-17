import React from "react";

const PageImg = ({ category, index }) => {
  const handleImgError = event => {
    event.target.onError = null;
    event.target.src =
      "https://starwars-visualguide.com/assets/img/placeholder-small.jpg";
  };

  return (
    <img
      className="Page-Category__image"
      src={`https://starwars-visualguide.com/assets/img/${
        /(people|pilots|residents)/gi.test(category) ? "characters" : category
      }/${index}.jpg`}
      alt="Star Wars"
      onError={handleImgError.bind()}
    />
  );
};

export default PageImg;
