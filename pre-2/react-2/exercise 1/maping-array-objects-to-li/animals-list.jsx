
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";

const animals = [
  { label: "Horse" },
  { label: "Turtle" },
  { label: "Elephant" },
  { label: "Monkey" },
];

const animalsInHtml = animals.map((singleAnimals, index) => {
  return <li key={index}>{singleAnimals.label}</li>;
});

createRoot.render(<ul>{animalsInHtml}</ul>, document.querySelector("#root"));