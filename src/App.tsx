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
            { title: "Talent Pool", image: "/midsection/talent-pools.svg" },
            { title: "Brand Awareness", image: "/midsection/brand-awareness.svg" },
            { title: "Promotion", image: "/midsection/promotion.svg" },
          ]}
        />
        <MiddleSection
          title="Why Partnership with us?"
          content={[
            { title: "Adding value to Community", image: "/midsection/value.svg" },
            { title: "Promotion", image: "/midsection/promotion.svg" },
            { title: "Community Reach", image: "/midsection/community-reach.svg" },
          ]}
        />
        <a href="https://forms.gle/ChwWq6JdxWjCeerg7"><button className="px-4 py-3 bg-[#BE5038] text-white font-semibold transition-colors rounded-md hover:bg-opacity-80 xl:text-2xl lg:text-2xl md:text-xl sm:3xl">Apply As Partner</button></a>
        <LeaderBoardSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
