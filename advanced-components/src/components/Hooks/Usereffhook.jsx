import React, { useEffect, useRef, useState } from "react";

function Usereffhook() {
  const [name, setName] = useState("");
  const [inputname, setInputname] = useState("");

  let myname = useRef("My name is XYZ");

  let myinput = useRef();

  // console.log(myname.current);
  // 1. Reff variabl value not changed on component re-render
  // 2. We can assign useReff variable to any of the imput, using variable we can do anythng with the input element.

  useEffect(() => {
    // console.log("Renn component.");
    myinput.current.focus();
    // console.log(myinput.current.value);
  }, [inputname]);

  return (
    <>
      <h3>useReff</h3>
      <label>Add you name:</label>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => (myname = "My name is -- abc.")}>
        Change the Reff variable val
      </button>
      <button onClick={() => console.log(myname)}>
        Print curront val of Reff
      </button>
      <br />
      <br />
      <input
        type="text"
        ref={myinput}
        onChange={(e) => setInputname(e.target.value)}
      />
      <br />
      <br />
    </>
  );
}

export default Usereffhook;

// useMemo and useCallback

/*


useMemo(fn, [])
** It execute the function and return the value when the dependancy array [] changes.


useCallback(fn, []) 
** return the function once the dependancy array [] changes.


*/
