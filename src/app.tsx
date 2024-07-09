import React from "react";
import minam from "../static/basic-data";

interface textNode {
  textNode: string;
}

const Minam: React.FC<textNode> = ({ textNode }) => {
  return <h1>{textNode}</h1>;
};

const App: React.FC = () => {
  return (
    <div>
      <Minam textNode={minam} />
      <h1>안녕?</h1>
    </div>
  );
};

export default App;
