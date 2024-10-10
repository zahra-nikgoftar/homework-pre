import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */

const planetsInHTML = planets.map((planet)=>{
    return <li>{planet.join(" , ")}</li>
})


// 2) Add the array planetsInHTML inside the innerHTML of this <ul>
const content = <ul className="list-group m-5">{planetsInHTML}</ul>;

createRoot.render({content}, document.querySelector("#root"));
