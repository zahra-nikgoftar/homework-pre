import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Alert from "../../exercise 1/alert-component/Alert";
import Card from '../../exercise 1/building-a-layout/Card'
import output from '../../rendering-from-objects/app'
import './App.css'


function App() {
  
  return (
  <>
  <Alert text="OMG! Something really bad has happened!" />
  <Card data={{
  image: '../../.learn/assets/Dylan.png?raw=true',
  cardTitle: 'Bob Dylan',
  cardDescription:
    'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
  button: {
    url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
    label: 'Go to wikipedia',
  },
}}/>
   
      <Pokedex id={1} name="Charmander" type="fire" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" />
      <Pokedex id={2} name="Squirtle" type="water" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" />
      <Pokedex id={3} name="Butterfree" type="flying" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" />
      <Pokedex id={4} name="Rattata" type="normal" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" />
      <Pokedex id={5} name="Metapod" type="bug" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" />
  


  </>
);
}

export default App
