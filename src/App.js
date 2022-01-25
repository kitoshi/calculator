import './App.css'
import Calculator from './components/Calculator'
import { useEffect, useState } from 'react'

function App() {
  const [calculation, setCalculation] = useState('')

  const [value, setValue] = useState('')

  useEffect(() => {
    setCalculation((currentvalue) => currentvalue + value)
  }, [value])

  return (
    <div className='App'>
      <Calculator calculation={calculation} setValue={setValue} />
    </div>
  )
}

export default App
