import React from "react";

import img_1 from "../img/1.jpg";
import img_2 from "../img/2.jpg";
import img_3 from "../img/3.jpg";
import img_4 from "../img/4.jpg";
import img_5 from "../img/5.jpg";
import img_6 from "../img/6.jpg";
import img_7 from "../img/7.jpg";
import img_8 from "../img/8.jpg";
import img_9 from "../img/9.jpg";
import img_10 from "../img/10.jpg";
import img_11 from "../img/11.jpg";
import img_12 from "../img/12.jpg";

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="Gallery__box float-left">
        <img src={img_1} alt="sw" />
        <img src={img_2} alt="sw" />
        <img src={img_3} alt="sw" />
        <img src={img_10} alt="sw" />
      </div>
      <div className="Gallery__box float-left">
        <img src={img_4} alt="sw" />
        <img src={img_5} alt="sw" />
      </div>
      <div className="Gallery__box float-left">
        <img src={img_7} alt="sw" />
        <img src={img_8} alt="sw" />
        <img src={img_9} alt="sw" />
        <img src={img_6} alt="sw" />
      </div>
    </div>
  );
};

export default Gallery;
