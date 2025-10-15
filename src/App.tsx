import React from "react";

import Counter from "@/shared/components/Counter";
import { Header, Search } from "@/shared/components";
import { Home } from "./pages/home/Home";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <Search />

      <main className="main">
        <Home />
      </main>

      <aside>
        <Counter />
      </aside>
    </div>
  );
};

export default App;
