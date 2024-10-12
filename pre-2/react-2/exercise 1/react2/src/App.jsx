import React from "react";
import Alert from "../../exercise 1/alert-component/Alert";
import Card from '../../exercise 1/building-a-layout/Card'
import Pokedex from '../../props-component-architecture/Pokedex';
import './App.css'



function App() {
 const data = {
  image: '../../.learn/assets/Dylan.png?raw=true',
  cardTitle: 'Bob Dylan',
  cardDescription:
    'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
  button: {
    url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
    label: 'Go to wikipedia',
  },
};
  return (
  <>
  <Alert text="OMG! Something really bad has happened!" />
  {data.map(p=>{
    return (
      <Card
        image={p.image}
        cardTitle={p.cardTitle}
        cardDescription={p.cardDescription}
        buttonUrl={p.button.url}
        buttonLabel={p.button.label}
      />
    );
  })

  }

  <Pokedex/>


  </>
);
}

export default App
