import "./App.css";

import Card from "./components/card/Card.component";
import { Grid } from "./components/grid/Grid.component";
import RedirectionButton from "./components/redirectionButton/RedirectionButton.component";

function App() {
  return (
    <main className="h-full w-full bg-dark-green">
      <Grid>
        <Card order="order-1 md:order-1 lg:order-1" colSpan="col-span-2 lg:col-span-3"></Card>
        <Card order="order-2 md:order-2 lg:order-2">
          <div className="flex justify-center align-center h-full w-full">
            <img src="/me.svg" alt="Me" className="w-3/4" />
          </div>
        </Card>
        <Card order="order-3 md:order-3 lg:order-4" footer={<RedirectionButton />}>
          <div className="flex items-center justify-center content-center h-full w-full bg-[#0B65C2] relative">
            <i className="fa-brands fa-linkedin fa-4x" style={{ color: "white" }}></i>
          </div>
        </Card>
        <Card order="order-4 md:order-6 lg:order-6" colSpan="col-span-2" rowSpan=" row-span-2">
          Experience
        </Card>
        <Card order="order-5 md:order-4 lg:order-10" footer={<RedirectionButton />}>
          <div className="flex items-center justify-center content-center h-full w-full bg-[#24292E]">
            <i className="fa-brands fa-github fa-4x" style={{ color: "white" }}></i>
          </div>
        </Card>
        <Card order="order-6 md:order-5 lg:order-3" rowSpan="row-span-2">
          Project1
        </Card>
        <Card order="order-7 md:order-7 lg:order-7" rowSpan="row-span-2">
          Project2
        </Card>
        <Card order="order-8 md:order-9 lg:order-8">Map</Card>
        <Card order="order-9 md:order-8 lg:order-5" colSpan="col-span-2">
          Skills
        </Card>
        <Card order="order-10 md:order-10 lg:order-9" colSpan="col-span-2 lg:col-span-3">
          Testimonials
        </Card>
      </Grid>
      <RedirectionButton />
    </main>
  );
}

export default App;
