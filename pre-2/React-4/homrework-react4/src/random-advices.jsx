import React from "react";
import { useState } from "react";



function RandomAdviceRenderer() {
  const [advice, setAdvice] = useState(null);

  const fetchRandomAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("Error", error);
      setAdvice(" Please try again");
    }
  };

  return (
    <div className="advice-container">
      <h1>Random Advice:</h1>
      <p className="advice-text">{advice}</p>
      <button className="advice-button" onClick={fetchRandomAdvice}>
        Get New Advice
      </button>
    </div>
  );
}

export default RandomAdviceRenderer;
