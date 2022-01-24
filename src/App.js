import './App.css'
import Calculator from './components/Calculator'
import { useState } from 'react'

function App() {
  const [calculation, setCalculation] = useState({
    firstvalue: 0,
    secondvalue: 0,
    operator: '',
    finalvalue: 0
  })

  return (
    <div className='App'>
      <Calculator calculation={calculation} setCalculation={setCalculation} />
    </div>
  )
}

export default App
