import "./App.scss";
import AboutSection from "./component/about";
import FooterSection from "./component/footer";
import LandingSection from "./component/landing";
import LeaderBoardSection from "./component/leaderboard";
import MiddleSection from "./component/midsection";
import Navbar from "./component/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col px-5 justify-center items-center">
        <LandingSection />
        <AboutSection />
        <MiddleSection
          title="Prizes"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti asperiores, re."
        />
        <MiddleSection
          title="Our Partners"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti asperiores, re."
        />
        <LeaderBoardSection />
      </div>
      <FooterSection />
    </>
  );
}

export default App;
