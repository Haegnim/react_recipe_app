import React from "react";
import { Link } from "react-router-dom";
import "../style/recipe.css";

//hooks
//graphQL

const Recipe = ({ title, calories, img, ingrs }) => {
  return (
    <div>
      <h2>
        <Link
          to={{
            pathname: "/details",
            state: {
              title: title,
              calories: calories,
              img: img,
              ingrs: ingrs,
            },
          }}
        >
          {title}
        </Link>
      </h2>
      <img src={img} alt="" />
      <p>칼로리 : {calories}</p>
      <ul>
        {ingrs.map((ingr, i) => (
          <li key={i}>{ingr.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
//adsfadffd
