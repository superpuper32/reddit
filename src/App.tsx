import React from "react";
import Counter from "@components/Counter";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Reddit</h1>
      <Counter />
    </div>
  );
};

export default App;
