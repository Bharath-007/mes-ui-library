import { useState } from "react";
import { Button, MesTextField } from "./components";

function App() {
  return (
    <div className="App">
      <MesTextField label="Machine ID" placeholder="Enter Machine ID" />
    </div>
  );
}

export default App;
