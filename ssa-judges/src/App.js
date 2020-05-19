import React from "react";
import TextField from '@material-ui/core/TextField';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <TextField id="filled-search" label="Search Judges" type="Search" variant="filled"/>
      </div>
    </div>
  );
}

export default App;
