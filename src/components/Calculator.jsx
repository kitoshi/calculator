import Numbers from './Numbers'

export default function Calculator(props) {
  const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <table>
        <thead>
          <tr>
            <th
              colSpan={'4'}
              style={{
                backgroundColor: '#505050',
                width: '100%',
                textAlign: 'right',
                paddingRight: '5%',
                fontSize: 'xx-large'
              }}
            >
              {props.numberInput === '' ? '0' : props.numberInput}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button
                onClick={props.clearNumbers}
                style={{ backgroundColor: '#505050' }}
              >
                AC
              </button>
            </td>
            <td>
              <button
                onClick={props.signChange}
                style={{ backgroundColor: '#505050' }}
              >
                +/-
              </button>
            </td>
            <td>
              <button
                onClick={props.percentNumberInput}
                style={{ backgroundColor: '#505050' }}
              >
                %
              </button>
            </td>
            <td>
              <button
                onClick={() => props.operatorSelect('/')}
                style={{ backgroundColor: 'orange' }}
              >
                ÷
              </button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(7, 10)}
              setValue={props.setValue}
            />
            <td>
              <button
                onClick={() => props.operatorSelect('*')}
                style={{ backgroundColor: 'orange' }}
              >
                x
              </button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(4, 7)}
              setValue={props.setValue}
            />
            <td>
              <button
                onClick={() => props.operatorSelect('-')}
                style={{ backgroundColor: 'orange' }}
              >
                -
              </button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(1, 4)}
              setValue={props.setValue}
            />
            <td>
              <button
                onClick={() => props.operatorSelect('+')}
                style={{ backgroundColor: 'orange' }}
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(0, 1)}
              setValue={props.setValue}
            />
            <td>
              <button
                onClick={props.decimalNumberInput}
                style={{ backgroundColor: '#939799' }}
              >
                .
              </button>
            </td>
            <td>
              <button
                onClick={props.evaluateCalculation}
                style={{ backgroundColor: 'orange' }}
              >
                =
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
