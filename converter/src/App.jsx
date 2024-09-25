import React,{ useState } from 'react'
import './App.css'
import Input from './components/Input'

function App() {
  const [currency1, setCurrency1] = useState(0);
  const [currency2, setCurrency2] = useState(0);
  
  const handle1 = (value)=>{
    setCurrency1(()=>value);
    setCurrency2(value * 0.012);
  }
 
  const handleConvert = ()=>{
    
    console.log(currency2);
  }
  return (
   <div>
    <h1>converter</h1>
    <Input value={currency1} handle={handle1} />
    <br />
    <button onClick={handleConvert}>convert</button>
    <br />
    <Input value={currency2} />
   </div>
  )
}

export default App