import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

const App = () => {
  // Location Font Effect
  const location = data.map((x) => x.location.toUpperCase());

  // Card Elements
  // map -> take 1 object from array -> give as item
  // map -> 2nd arg is the index!
  const cardElements = data.map((set, index) => (
    <Card key={set.title} item={set} location={location[index]} />
  ));
  return (
    <div>
      <Navbar />
      {cardElements}
    </div>
  );
};

export default App;
