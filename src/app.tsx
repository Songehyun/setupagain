import React from "react";
import minam from "../static/basic-data";
import Minam from "./Minam";

const App: React.FC = () => {
  return (
    <div>
      <Minam textNode={minam} />
      <h1>안녕?</h1>
    </div>
  );
};

export default App;
