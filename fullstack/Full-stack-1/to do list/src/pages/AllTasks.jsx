import React, { useState } from "react";
import "../style/allTask.css";
import data from "../data/sample-data.json";

function AllTasks() {
  const [isClicked, setIsClicked] = useState(false);
  const [isImportant, setIsImportant] = useState(data.task.important);

  const toggleImportant = () => {
    setIsImportant(!isImportant);
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="card-contaner">
      <div className="card-task">
        <h5>{data.task.title}</h5>
        <p>{data.task.description}</p>
        <div>
          <img src="../../public/assets/date.svg" alt="date" className="date" />
          <p className="deadline">
            {new Date(data.task.deadline).toLocaleDateString()}
          </p>
        </div>
        <div>
          <p>---------------------------------------------------</p>
        </div>
        <div className="conraner-icons">
          <button
            onClick={handleClick}
            style={{
              backgroundColor: isClicked
                ? "rgb(232, 208, 103)"
                : "rgb(133, 208, 191)",
              color: isClicked ? "rgb(156, 78, 73)" : "rgb(46, 103, 46)",
              padding: "5px 5px",
              border: "none",
              borderRadius: "55px",
              cursor: "pointer",
            }}
          >
            {isClicked ? "uncompleted" : "completed"}
          </button>
          <div className="contaner-icon-tarsh-star-arrow">
            <button className="star" onClick={toggleImportant}>
              <img
                src={
                  isImportant
                    ? "../../public/assets/star-red.svg"
                    : "../../public/assets/star-line.svg"
                }
                alt="star"
              />
            </button>
            <button>
              <img src="../../public/assets/trash.svg" alt="trash" className="trash-icon"/>
            </button>
            <button>
              <img src="../../public/assets/kabab-menu.svg" alt="line" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTasks;
