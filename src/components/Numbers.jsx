export default function Numbers() {
  const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      {numberArray.map((item) => (
        <button type='button'>{item}</button>
      ))}
    </>
  )
}
