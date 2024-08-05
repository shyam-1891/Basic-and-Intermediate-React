import { useState } from "react";
import "./App.css";
import Arraycomponent from "./Arraycomponent";
import Namecounter from "./Namecounter";
import LifeCycleFunctinalComponent from "./LifeCycleFunctinalComponent";
function App() {
  const [click, setClick] = useState(null);
  return (
    <>
      <h1>Stateful Components.</h1>
      {/* <Arraycomponent /> */}
      <Namecounter />

      <hr />
      <h1>Checking the Life Cycle</h1>
      <button onClick={() => setClick(!click)}>
        {click ? `Hide Counter` : `Show Counter`}
      </button>
      {click && <LifeCycleFunctinalComponent />}
    </>
  );
}

export default App;
