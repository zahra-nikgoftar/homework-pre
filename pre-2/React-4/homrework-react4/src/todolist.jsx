import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
// import { FaTrash } from "react-icons/fa";


function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5");
      const data = await res.json();
      setTasks(data);
    };
    fetchTask();
  }, []);

  const addTask = () => {
    if (newTask === "") {
      alert("please enter your task!");
      return;
    }

    const newItem = {
      id: tasks.length + 1,
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, newItem]);
    setNewTask("");
  };

  const taskComplete = (taskId) => {
    setTasks((up) =>
      up.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((del) => del.filter((task) => task.id !== taskId));
    
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To Do List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? "list-group-item-success" : ""
            }`}
          >
            <div>
              <input
                type="checkbox"
                className="me-2"
                checked={task.completed}
                onChange={() => taskComplete(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>
            </div>
            <button
              className="btn btn-danger"
            //   variant="danger"
              onClick={() => deleteTask(task.id)}
            >
              <i className="bi bi-trash"></i>
              {/* <FaTrash /> */} 
              
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
