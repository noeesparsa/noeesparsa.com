import "./App.css";
import RedirectionButton from "./components/atoms/redirectionButton/RedirectionButton.component";
import AboutContent from "./components/contents/aboutContent/AboutContent.component";
import SkillsContent from "./components/contents/skillsContent/SkillsContent.component";
import Card from "./components/layout/card/Card.component";
import FilledCard from "./components/layout/filledCard/FilledCard.component";
import { Grid } from "./components/layout/grid/Grid.component";

function App() {
  return (
    <main className="h-full w-full bg-gray-200">
      <Grid>
        {/** ABOUT **/}
        <Card
          order="order-1 md:order-1 lg:order-1"
          colSpan="col-span-2 lg:col-span-3"
          rowSpan="row-span-2 md:row-span-1"
          header="About"
        >
          <AboutContent />
        </Card>
        {/** PHOTO **/}
        <Card order="order-2 md:order-2 lg:order-2">
          <div className="flex justify-center align-center h-full w-full">
            <img src="/me.svg" alt="Me" className="w-3/4" />
          </div>
        </Card>
        {/** LINKEDIN **/}
        <FilledCard order="order-3 md:order-3 lg:order-4" footer={<RedirectionButton />}>
          <div className="flex items-center justify-center content-center h-full w-full bg-[#0B65C2] relative">
            <i className="fa-brands fa-linkedin fa-4x" style={{ color: "white" }}></i>
          </div>
        </FilledCard>
        {/** EXPERIENCES **/}
        <Card
          order="order-4 md:order-6 lg:order-6"
          colSpan="col-span-2"
          rowSpan="row-span-4 md:row-span-2 "
          header="Experiences"
        ></Card>
        {/** GITHUB **/}
        <FilledCard order="order-5 md:order-4 lg:order-10" footer={<RedirectionButton />}>
          <div className="flex items-center justify-center content-center h-full w-full bg-[#24292E]">
            <i className="fa-brands fa-github fa-4x" style={{ color: "white" }}></i>
          </div>
        </FilledCard>
        {/** PROJECT 1 **/}
        <Card
          order="order-6 md:order-5 lg:order-3"
          rowSpan="row-span-3 md:row-span-2"
          header="Project 1"
        ></Card>
        {/** PROJECT 2 **/}
        <Card
          order="order-7 md:order-7 lg:order-7"
          rowSpan="row-span-3 md:row-span-2"
          header="Project 2"
        ></Card>
        {/** SKILLS **/}
        <FilledCard
          order="order-8 md:order-8 lg:order-5"
          additionalContentClasses="flex items-center"
        >
          <SkillsContent />
        </FilledCard>
      </Grid>
    </main>
  );
}

export default App;
