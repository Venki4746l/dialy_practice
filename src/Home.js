import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const dataset = [];

  for (let i = 1; i <= 30; i++) {
    dataset.push({name:"task"+i,link:`task${i}`});
  }

  return (
    <div>
      <h1>showing the all days tasks</h1>
      <ul>
        {dataset.map((day, index) => (
          <li key={index}>
            <Link to={day.name}> {day.link}</Link>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default Home;
