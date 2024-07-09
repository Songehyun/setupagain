import React from "react";
import minam from "../static/basic-data";
import hoyeong from "../static/hoyeong";
import Minam from "./Minam";
import UlLi from "./ulli";

const App: React.FC = () => {
  return (
    <div>
      <UlLi listItem={hoyeong} />
      <Minam textNode={minam} />
      <h1>안녕?</h1>
    </div>
  );
};

export default App;
