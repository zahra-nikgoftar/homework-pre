import { useState ,useEffect} from 'react'
import PostRendering from './post-rendering'
import RandomAdviceRenderer from "./random-advices";
import ToDoList from "./todolist";
import './App.css'

function App() {

  return (
    <>
      {/* <PostRendering/> */}
      {/* <RandomAdviceRenderer /> */}
      <ToDoList />
    </>
  );
}

export default App
