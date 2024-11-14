import React, { useState, useEffect } from "react";
import "../style/allTask.css";
import data from "../data/sample-data.json";

function AllTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data.task);
  }, []);

  const toggleImportant = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, important: !task.important } : task
      )
    );
  };

  const handleClick = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="tasks-container">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task._id} className="card-container">
            <div className="card-task">
              <h5>{task.title}</h5>
              <p>{task.description}</p>
              <div>
                <img
                  src="../../public/assets/date.svg"
                  alt="date"
                  className="date"
                />
                <p className="deadline">
                  {new Date(task.deadline).toLocaleDateString()}{" "}
                </p>
              </div>
              <div>
                <p>-----------------------------------------</p>
              </div>
              <div className="conraner-icons">
                <button
                  onClick={() => handleClick(task._id)}
                  style={{
                    backgroundColor: task.completed
                      ? "rgb(232, 208, 103)"
                      : "rgb(133, 208, 191)",
                    color: task.completed
                      ? "rgb(156, 78, 73)"
                      : "rgb(46, 103, 46)",
                    padding: "5px 5px",
                    border: "none",
                    borderRadius: "55px",
                    cursor: "pointer",
                  }}
                >
                  {task.completed ? "uncompleted" : "completed"}
                </button>
                <div className="contaner-icon-tarsh-star-arrow">
                  <button
                    className="star"
                    onClick={() => toggleImportant(task._id)}
                  >
                    <img
                      src={
                        task.important
                          ? "../../public/assets/star-red.svg"
                          : "../../public/assets/star-line.svg"
                      }
                      alt="star"
                    />
                  </button>
                  <button>
                    <img
                      src="../../public/assets/trash.svg"
                      alt="trash"
                      className="trash-icon"
                    />
                  </button>
                  <button>
                    <img src="../../public/assets/kabab-menu.svg" alt="line" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default AllTasks;
