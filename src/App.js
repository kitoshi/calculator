import './App.css'
import Calculator from './components/Calculator'
import { useEffect, useState } from 'react'

function App() {
  const [numberInput, setNumberInput] = useState('')
  const [value, setValue] = useState('')
  const [calculation, setCalculation] = useState('')

  useEffect(() => {
    setNumberInput((currentvalue) => currentvalue + value)
    setValue(() => '')
  }, [value])

  //AC
  function clearNumbers() {
    setNumberInput('')
    setValue('')
    setCalculation('')
  }

  //+or-
  function signChange() {
    if (numberInput === '') {
      return null
    } else if (numberInput.includes('-') === false) {
      setNumberInput((prevValue) => '-' + prevValue)
    } else {
      setNumberInput((prevValue) => prevValue.replace(/-/, ''))
    }
  }
  //%
  function percentNumberInput() {
    if (numberInput === '') {
      return null
    }
    setNumberInput((current) => parseFloat(current) / 100)
  }
  //decimal
  function decimalNumberInput() {
    //one decimal only
    if (numberInput === '') {
      return null
    } else if (numberInput.includes('.') === true) {
      return null
    }
    setNumberInput((current) => current + '.')
  }

  //operators
  function operatorSelect(val) {
    if ((numberInput === '') | (/^0+$/.test(numberInput) === true)) {
      //eval cannot take all zeroes
      return null
    } else if (val === '-' && numberInput.includes('-') === true) {
      //double negative
      setCalculation(
        (prevValue) =>
          //eval cannot take leading zeroes
          prevValue +
          val +
          numberInput.replace(/-/, '').replace(/^0+/ | /^-0+/, '')
      )
      setNumberInput(() => '')
    } else {
      setCalculation(
        //eval cannot take leading zeroes
        (prevValue) => numberInput.replace(/^0+/, '') + val + prevValue
      )
      setNumberInput(() => '')
    }
  }

  //equals
  function evaluateCalculation() {
    if ((numberInput === '') | (/^0+$/.test(numberInput) === true)) {
      return null
    } else if (
      //double negative
      numberInput.includes('-') === true &&
      calculation.endsWith('-')
    ) {
      setNumberInput((prevValue) =>
        eval(
          calculation.replace(/^0+/, '') +
            prevValue.replace(/-/, '').replace(/^0+/, '')
        ).toString()
      )
      setCalculation('')
    } else {
      setNumberInput((prevValue) =>
        eval(
          calculation.replace(/^0+/, '') + prevValue.replace(/^0+/, '')
        ).toString()
      )
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
      />
    </div>
  )
}

export default App
