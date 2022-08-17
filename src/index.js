import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import RSCExample from "./RSCExample";

function App() {
  return (
    <div id="App">
      <h1>react-scrollbars-custom live example</h1>
      <RSCExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
