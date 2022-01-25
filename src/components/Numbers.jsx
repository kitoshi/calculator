export default function Numbers(props) {
  return (
    <>
      {props.numberArray.map((item, idx) => (
        <td key={idx} colSpan={props.numberArray.length === 1 ? '2' : '1'}>
          <button
            type='button'
            className='numbers'
            onClick={() => props.setValue((c) => item)}
          >
            {item}
          </button>
        </td>
      ))}
    </>
  )
}
