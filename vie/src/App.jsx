import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0)
  //let counter = 0;

  const addValue = ()=>{
    console.log('value added');
     // eslint-disable-next-line no-const-assign
     setCounter(counter+1)
  }

  const removeValue = ()=>{
    console.log('value removed');
     // eslint-disable-next-line no-const-assign
     if(counter>0){
      setCounter(counter-1)
     }else{
      console.log('already counter value is zero');
     }
     
  }
  return (
    <>
      <h1> Chai with Dharmik Dudhat </h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>decrease value</button>
    </>
  );
}

export default App;
