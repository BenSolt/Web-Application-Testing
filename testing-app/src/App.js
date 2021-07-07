import React, { useState } from 'react';

import ButtonBoard from './components/ButtonBoard';
import Viewport from './components/Viewport';

import './App.css';



function App() {
const [hits, setHits] = useState(0)
const [strikes, setStrikes] = useState(0);
const [balls, setBalls] = useState(0)

const [clear, setClear] = useState(0);


const strike = () => setStrikes(strikes + 1) 
if (strikes === 3) { setStrikes(0); setBalls(0);
}

const ball = () => setBalls(balls + 1)
if (balls === 4) { setBalls(0); setStrikes(0);
}

const foul = () => {
  setStrikes(strikes + 2)
  if (strikes === 1) {setStrikes(strikes + 1)} 
  if (strikes === 2) {setStrikes(strikes + 0)}      
}

const hit = () => {setStrikes(0); setBalls(0);
  setHits(hits + 1)
}


const clearAll = () => {setStrikes(0); setBalls(0);
  setHits(0)
}

  return (
    <div className="App">

      <div className="appContainer"> 

        <div className="Section1"> 
          <Viewport
            viewHits={hits} 
            viewBalls={balls}
            viewStrikes={strikes}

           
          />
        </div>
        <div className="Section1"> 
          <ButtonBoard
            buttonboardhit={hit}
            buttonboardstrike={strike}
            buttonboardballs={ball}
            buttonboardfoul={foul}

            viewClear={clearAll}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
