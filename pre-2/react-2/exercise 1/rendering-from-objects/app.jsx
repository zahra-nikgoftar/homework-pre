
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import CustomerInformation from "./CustomerInformation";
const customer = {
	first_name: "Bob",
	last_name: "Dylan"
};

// Your code inside these <div> tags
const output = (
  <div>
    <CustomerInformation customer={customer} />
  </div>
);


createRoot(document.getElementById("root")).render(output);
