import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './counter-app'
import ToggleTheme from "./toggleTheme";
import LikeDislikeButton from './like-dislike';
import './App.css'

function App() {

  return (
    <>
      <Counter />
      <ToggleTheme />
      <LikeDislikeButton/>
    </>
  );
}

export default App
