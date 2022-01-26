import './App.css'
import Calculator from './components/Calculator'
import { useEffect, useState } from 'react'

function App() {
  const [numberInput, setNumberInput] = useState('')
  const [value, setValue] = useState('')
  const [sign, setSign] = useState('')
  const [calculation, setCalculation] = useState('')

  useEffect(() => {
    setNumberInput((currentvalue) => currentvalue + value)
    setValue(() => '')
  }, [value])

  //AC
  function clearNumbers() {
    setNumberInput('')
    setValue('')
    setSign('')
    setCalculation('')
  }

  //+or-
  function signChange() {
    if (sign === '') {
      setSign('-')
    } else if (sign === '-') {
      setSign('')
    } else {
    }
  }
  //%
  function percentNumberInput() {
    setNumberInput((current) => parseFloat(current) / 100)
  }
  //decimal
  function decimalNumberInput() {
    setNumberInput((current) => current + '.')
  }

  //operators
  function operatorSelect(val) {
    if (val === '-' && sign === '-') {
      //double negative
      setCalculation((prevValue) => prevValue + '+' + numberInput)
      setNumberInput(() => '')
      setSign(() => '')
    } else {
      setCalculation((prevValue) => prevValue + val + sign + numberInput)
      setNumberInput(() => '')
      setSign(() => '')
    }
  }

  //equals
  function evaluateCalculation() {
    if (sign === '-') {
      setNumberInput((prevValue) => eval('-' + prevValue + calculation))
      setSign('')
      setCalculation('')
    } else {
      setNumberInput((prevValue) => eval(prevValue + calculation))
      setSign('')
      setCalculation('')
    }
  }

  return (
    <div className='App'>
      <Calculator
        numberInput={numberInput}
        setValue={setValue}
        clearNumbers={clearNumbers}
        signChange={signChange}
        operatorSelect={operatorSelect}
        percentNumberInput={percentNumberInput}
        decimalNumberInput={decimalNumberInput}
        evaluateCalculation={evaluateCalculation}
        sign={sign}
      />
    </div>
  )
}

export default App
