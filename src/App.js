import { card1, card2 } from './data/data.js'
import Card from './components/Card.js';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Card {...card1}>{<img src={card1.src} className="card-img-top" alt="..." />}</Card>
      <Card {...card2} />
    </React.Fragment>
  )
}

export default App;