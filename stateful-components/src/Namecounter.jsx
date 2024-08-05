import { useState } from "react";

function Namecounter() {
  const [name, setName] = useState("Lorem");
  const [age, setAge] = useState(23);

  function addAge() {
    setAge(age + 1);
  }

  function reduceAge() {
    setAge(age - 1);
  }

  return (
    <>
      <h1>Name and Counter</h1>
      <br></br>
      <br></br>

      <label htmlFor="Fname">Add Name:</label>
      <input
        type="text"
        name="Fname"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br></br>
      <label>Age:</label>
      <button onClick={() => addAge()}>+</button>
      {age}
      <button onClick={() => reduceAge()}>-</button>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        My name is "{name}" and I am "{age}" years old.
      </h2>
    </>
  );
}

export default Namecounter;
