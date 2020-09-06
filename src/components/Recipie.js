import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Recipie = ({ value }) => {
  console.log(value);
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const result = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`
      )
        .then((response) => response.json())
        .then((data) => setData(data.meals));
    };
    GetData();
    setData([]);
  }, []);

  console.log(data);
  if (data !== []) {
    return data.map((val) => {
      return (
        <Link to={`/${val.idMeal}`}>
          <h2>{val.strMeal}</h2>
          <img src={val.strMealThumb} />
        </Link>
      );
    });
  }
};

export default Recipie;
