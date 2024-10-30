import React from "react";
import "./count.css";
import { useDispatch, useSelector } from "react-redux";

import {
  INCREMENT,
  DECREMENT,
  RESET,
} from "../counter/actions-counter/action.counter.js";


function Counter() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.count);
  const handleAdd = () => {
    dispatch({
      type: INCREMENT,
    });
  };

  const handleMinus = () => {
    dispatch({
      type: DECREMENT,
    });
  };

  const handleReset = () => {
    dispatch({
      type: RESET,
    });
  };

  return (
    <div className="parent-counter">
      <h1>{data}</h1>

      <section>
        <button className="button" onClick={handleAdd}>
          Increment
        </button>
        <button className="button" onClick={handleMinus}>
          Decrement
        </button>
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </section>
    </div>
  );
}

export default Counter;
