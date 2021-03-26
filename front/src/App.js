import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <Button
        variant="contained"
        color="primary"
        href="http://lamp.scottzockoll.com/"
      >
        Go to scott's website it's better than mine at the moment.
      </Button>
    </div>
  );
}

export default App;
