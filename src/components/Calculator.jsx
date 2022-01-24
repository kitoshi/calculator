import Numbers from './Numbers'

export default function Calculator(props) {
  return (
    <>
      <h1>{props.value}</h1>
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>divide</button>
          <button>x</button>
          <button>-</button>
          <button>=</button>
          <button>.</button>
      <Numbers />
    </>
  )
}
