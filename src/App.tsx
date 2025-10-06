import React from "react";

import Counter from "@components/Counter";
import { Header } from "@components/header";
import { Articles } from "@/widgets/articles";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <article>
          <Articles />
        </article>

      </main>

      <aside>
        <Counter />
      </aside>
    </div>
  );
};

export default App;
