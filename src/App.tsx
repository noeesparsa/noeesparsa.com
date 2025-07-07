import "./App.css";

import type { FC } from "react";
import Grid from "./components/grid/Grid.component";
import Header from "./components/header/Header.component";

const App: FC = () => {
  return (
    <main className="relative flex min-h-screen flex-col content-center bg-red-100 ">
      <Header />
      <Grid />
    </main>
  );
};

export default App;
