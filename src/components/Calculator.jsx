import Numbers from './Numbers'

export default function Calculator(props) {
  const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{props.numberInput === '' ? '0' : props.numberInput}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button onClick={props.clearNumbers}>AC</button>
            </td>
            <td>
              <button onClick={props.signChange}>+/-</button>
            </td>
            <td>
              <button onClick={props.percentNumberInput}>%</button>
            </td>
            <td>
              <button onClick={() => props.operatorSelect('/')}>÷</button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(7, 10)}
              setValue={props.setValue}
            />
            <td>
              <button onClick={() => props.operatorSelect('*')}>x</button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(4, 7)}
              setValue={props.setValue}
            />
            <td>
              <button onClick={() => props.operatorSelect('-')}>-</button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(1, 4)}
              setValue={props.setValue}
            />
            <td>
              <button onClick={() => props.operatorSelect('+')}>+</button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(0, 1)}
              setValue={props.setValue}
            />
            <td>
              <button onClick={props.decimalNumberInput}>.</button>
            </td>
            <td>
              <button onClick={props.evaluateCalculation}>=</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
