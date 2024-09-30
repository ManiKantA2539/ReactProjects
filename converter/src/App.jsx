import React, { useState } from 'react'
import './App.css'
import Input from './components/Input'
import axios from 'axios';
import useCurrency from "./hooks/useCurrency"

function App() {
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [from, setFrom] = useState('inr');
  const [to, setTo] = useState('usd');

  const handle1 = (value) => {
    setCurrency1(() => value);

  }

  const handleConvert = () => {
    setCurrency2(currency1*(currency[to]));
  }
  const handleSwap = ()=>{
    setFrom(to);
    setTo(from);
  }
  const currency = useCurrency(from);
  const curr_keys = currency ? Object.keys(currency) : [];

  return (
    <div>
      <h1>converter</h1>
      <Input
        value={currency1}
        handle={handle1}
        currency={curr_keys} 
        currency_change={(currency) => setFrom(currency)} 
        selected_curr = {from}
      />
      <br />
      <button onClick={handleConvert}>convert</button>
      <button onClick={handleSwap}>swap</button>
      <br />
      <br />
      <Input 
        value={currency2} 
        currency={curr_keys} 
        currency_change={(curr) => setTo(curr)} 
        selected_curr={to}
      />
    </div>
  )
}

export default App