import "./App.scss";
import AboutSection from "./components/about";
import FooterSection from "./components/footer";
import LandingSection from "./components/landing";
import LeaderBoardSection from "./components/leaderboard";
import MiddleSection from "./components/midsection";
import Navbar from "./components/navbar";

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
