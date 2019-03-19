import React from "react";
import { NavLink } from "react-router-dom";
import { config } from "../config";

const Home = () => {
  return (
    <>
      <div className="grid">
        {Object.keys(config).map((title, i) => (
          <NavLink key={i} to={`/${title}`} className="List__item">
            <div className="List__background">
              <span className="List__title">{title}</span>
            </div>
            <img
              src={`https://starwars-visualguide.com/assets/img/categories/${
                title !== "people" ? title : "character"
              }.jpg`}
              alt="Star Wars"
            />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Home;
