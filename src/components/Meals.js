import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Recipie from "./Recipie";

const Meals = ({ value }) => {
  return (
    <div>
      {value.map((data) => {
        return (
          <div>
            <nav>
              <Link to={`/${data.strCategory}`}>{data.strCategory}</Link>
            </nav>

            <Routes>
              <Route
                path={`/${data.strCategory}`}
                element={<Recipie value={data.strCategory} />}
              />
            </Routes>
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
