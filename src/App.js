import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Meals from "./components/Meals";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const result = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      )
        .then((response) => response.json())
        .then((data) => setData(data.meals));
    };
    GetData();
  }, []);

  return (
    <div>
      <Router>
        <Meals value={data} />
      </Router>
    </div>
  );
}

export default App;
