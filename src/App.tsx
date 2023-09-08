import "./App.scss";
import AboutSection from "./components/about";
import FooterSection from "./components/footer";
import LandingSection from "./components/landing";
import LeaderBoardSection from "./components/leaderboard";
import MiddleSection from "./components/midsection";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="main-bg">
      <Navbar />
      <div className="w-screen flex flex-col px-5 justify-center items-center">
        <LandingSection />
        <AboutSection />
        <MiddleSection
          title="Why Sponsor Us?"
          content={[
            { title: "Talent Pool", image: "/midsection/talent-pools.png" },
            { title: "Brand Awareness", image: "/midsection/brand-awareness-V1.5.png" },
            { title: "Promotion", image: "/midsection/Vector-Promotion.jpg" },
          ]}
        />
        <MiddleSection
          title="Why Partnership with us?"
          content={[
            { title: "Adding value to Community", image: "/midsection/value.jpeg" },
            { title: "Promotion", image: "/midsection/Vector-Promotion.jpg" },
            { title: "Community Reach", image: "/midsection/community-reach.png" },
          ]}
        />
        <LeaderBoardSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
