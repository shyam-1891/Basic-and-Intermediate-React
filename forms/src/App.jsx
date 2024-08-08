import { useState } from "react";
import FormValidation from "./components/FormValidation";
import FormValidationLibrary from "./components/validation-with-library/FormValidationLibrary";
function App() {
  return (
    <>
      <FormValidation />
      <FormValidationLibrary />
    </>
  );
}

export default App;
