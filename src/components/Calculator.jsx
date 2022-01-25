import Numbers from './Numbers'

export default function Calculator(props) {
  const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{props.calculation === '' ? '0' : props.calculation}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button>AC</button>
            </td>
            <td>
              <button>+/-</button>
            </td>
            <td>
              <button>%</button>
            </td>
            <td>
              <button>÷</button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(7, 10)}
              setValue={props.setValue}
            />
            <td>
              <button>x</button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(4, 7)}
              setValue={props.setValue}
            />
            <td>
              <button>-</button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(1, 4)}
              setValue={props.setValue}
            />
            <td>
              <button>+</button>
            </td>
          </tr>
          <tr>
            <Numbers
              numberArray={numberArray.slice(0, 1)}
              setValue={props.setValue}
            />
            <td>
              <button>.</button>
            </td>
            <td>
              <button>=</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
