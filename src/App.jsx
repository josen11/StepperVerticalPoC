import { useState } from "react";
// import BasicPrimeSteps from "./PrimeSteps/Demo";
import CustomVerticalPrimeStepper from "./PrimeStepper/DemoVerticalCustom";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        {/* <h2>Steps</h2>
        <BasicPrimeSteps /> */}

        <h2>Custom Vertical Stepper</h2>
        <CustomVerticalPrimeStepper />
      </div>
    </>
  );
}

export default App;
