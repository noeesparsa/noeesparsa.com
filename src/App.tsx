import "./App.css";

import type { FC } from "react";
import Experiences from "./components/experiences/Experiences.components";
import Header from "./components/header/Header.component";
import Projects from "./components/projects/Projects.components";
import Section from "./components/section/Section.component";
import Trainings from "./components/trainings/trainings.components";

const App: FC = () => {
  return (
    <>
      <Header />
      <Section title="Projects">
        <Projects />
      </Section>
      <Section title="Work Experiences">
        <Experiences />
      </Section>
      <Section title="Trainings">
        <Trainings />
      </Section>
    </>
  );
};

export default App;
