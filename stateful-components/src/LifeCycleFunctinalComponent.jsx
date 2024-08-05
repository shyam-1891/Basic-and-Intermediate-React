import React, { useState, useEffect } from "react";

function LifeCycleFunctinalComponent() {
  // Mounting

  /// Updating

  // Unmounting - remove

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("The component is mounted.");
    return () => {
      console.log("The component has unmounted.");
    };
  }, [count]); // Based on the dependancy the component updated.
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default LifeCycleFunctinalComponent;
