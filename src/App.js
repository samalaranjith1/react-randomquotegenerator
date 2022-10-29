import './App.css';
import React, { useState ,useEffect} from 'react'

function App() {

  
  const [randomNumber,setRandomNumber]=useState(0);
  function changeItem(){
    setRandomNumber(Math.floor(Math.random()*(6-1))+1);
  }
  const [text,setText]=useState('')
  useEffect(() => {
          // GET request using fetch inside useEffect React hook
          fetch('https://api.adviceslip.com/advice')
              .then(response => response.json())
              .then(data => setText(data.slip.advice));
      
      // empty dependency array means this effect will only run once (like componentDidMount in classes)
      });
  return (
    <div className="App">
      <div className='card'>
      <h1 className='appText'>{text}</h1>
      <button className='appButton' onClick={changeItem}>Change</button>
    </div>
    </div>
  );
}

export default App;
