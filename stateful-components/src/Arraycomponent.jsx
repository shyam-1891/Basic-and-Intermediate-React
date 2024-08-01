import { useState } from 'react'

function Arraycomponent() {

  const initialArr = ["A", "B", "C"];

  const [stateArr , setStateArr] = useState(initialArr);

  console.log(stateArr);

  //removeFirstElement
  const removeFirstElement = () => {
    setStateArr(currentArray => {
      return currentArray.slice(1)
    })
  }

  //removeLastElement
  const removeLastElement = () => {
    const copyArr = [...stateArr];
    copyArr.splice(-1);
    setStateArr(copyArr);
  }

  //addLetterToStart
  function addLetterToStart(letter) {
    setStateArr(currentArray => {
      return [letter, ...currentArray]
    })
  }

  //addLetterToStart
  function addLetterToEnd(letter) {
    setStateArr(currentArray => {
      return [...currentArray, letter]
    })
  }

  //clearArr 
  function clearArr() {
    setStateArr([]);
  }

  //resetArr 
  function resetArr() {
    setStateArr(initialArr);
  }

  return (
    <>
      <h2>Initial Array</h2>
      <br></br><br></br>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br></br><br></br>
      <button onClick={() => removeLastElement()}>Remove Last Element</button>
      <br></br><br></br>
      <button onClick={() => addLetterToStart("First")}>Add To Start</button>
      <br></br><br></br>
      <button onClick={() => addLetterToEnd("BLast")}>Add To End</button>
      <br></br><br></br>
      <button onClick={() => clearArr()}>Clear Array</button>
      <br></br><br></br>
      <button onClick={() => resetArr()}>Reset Array</button>
    </>
  )
}

export default Arraycomponent