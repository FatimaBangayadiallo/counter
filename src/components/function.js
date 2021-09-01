
import React,{useState} from 'react';

function Function(){
  const [counter, setCounter] = useState("")
  const  addFive =()=>{
    setCounter(counter +5);
  };
  const resetZero =() =>{
    setCounter(0);
  }

  return (
    <div>
      <h1>counter: {counter}</h1>
      <hr/>
      <button onClick={addFive}>add five</button>
      <button onClick={resetZero}>reset ZERO</button>
    </div>

  );
}
export default Function;
