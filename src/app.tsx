import React from "react";

interface textNode {
  textNode: string;
}

const Minam: React.FC<textNode> = ({ textNode }) => {
  // 인터페이스에 <>로 무언가 추가되는게 제네릭 문법
  return <h1>{textNode}</h1>;
};

const App: React.FC = () => {
  return (
    <div>
      <Minam textNode="공욱재" />
      <h1>안녕</h1>
    </div>
  );
};

export default App;
