import "./App.css";

import type { FC } from "react";
import Header from "./components/header/Header.component";
import SocialMedias from "./components/socialMedias/SocialMedias.component";
import { Particles } from "./components/ui/particles";

const App: FC = () => {
  return (
    <main className="flex h-screen w-screen justify-center text-stone-800">
      <Particles className="absolute inset-0 z-0 " color="text-stone-800" ease={80} quantity={150} refresh />
      <div className="z-1 flex w-full max-w-5xl flex-col gap-8 p-8 border-2 border-stone-600">
        <Header />
        <SocialMedias />
      </div>
    </main>
  );
};

export default App;
