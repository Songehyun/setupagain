import React from "react";
import minam from "../static/basic-data";
import litext from "../static/li-intext";
import Minam from "./Minam";
import Inlist from "./ulli";

const App: React.FC = () => {
  return (
    <div>
      <Minam textNode={minam} />
      <h1>안녕?</h1>
      <div>
        <Inlist liintext={litext} />
      </div>
    </div>
  );
};

export default App;
