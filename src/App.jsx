import React, { useState } from 'react'
import styled from 'styled-components';
import './App.css';
const App = () => {
  const [principle, setPrinciple] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [tenure, setTenure] = useState('')
  const [maturityAmount, setMaturityAmount] = useState(null)
  const calcMaturity = () =>{
    const principleValue = parseFloat(principle)
    const interestRateValue = parseFloat(interestRate)
    const tenureValue = parseFloat(tenure)
    if (!isNaN(principleValue) && !isNaN(interestRateValue) && !isNaN(tenureValue)){
    const maturity = principleValue + (principleValue * interestRateValue * tenureValue) / 100
    setMaturityAmount(maturity.toFixed(2))
  }
  }
  return (
    <>
    <div className='container'>
    <h2>FD Calculator</h2>
      <div className='fd-Calc'>
      <label htmlFor="">Principle</label>
      <input type="number" value={principle} placeholder='Enter the principle amount' required onChange={(e) => setPrinciple(e.target.value)}/>
      </div>
      <div className='fd-Calc'>
      <label htmlFor="">Interest Rate (%)</label>
      <input type="number" value={interestRate} placeholder='Enter the interest rate in %age' onChange={(e) => setInterestRate(e.target.value)}/>
      </div>
      <div className='fd-Calc'>
        <label htmlFor="">Tenure (in years)</label>
        <input type="number" value={tenure} placeholder='Enter the tenure in years' required onChange={(e) => setTenure(e.target.value)}/>
      </div>
      <button onClick={calcMaturity} className='calc-Btn'>Calulate</button>
      {
        maturityAmount && (
            <p className='result'>Maturity Amount : {maturityAmount}</p>
        )
      }
    </div>
    </>
  )
}

export default App
