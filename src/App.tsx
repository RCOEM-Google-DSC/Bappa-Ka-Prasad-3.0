import "./App.scss";
import AboutSection from "./components/about";
import LandingSection from "./components/landing";
import LeaderBoardSection from "./components/leaderboard";
import MiddleSection from "./components/midsection";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import AOS from "aos";
import "aos/dist/aos.css";
import Prizes from "./components/prizes";

const firebaseConfig = {
	apiKey: "AIzaSyBSqRE6ZqZ8l1aKZCB9Ia_LsK_4yYANw5M",
	authDomain: "bkprashad-3.firebaseapp.com",
	projectId: "bkprashad-3",
	storageBucket: "bkprashad-3.appspot.com",
	messagingSenderId: "709644961830",
	appId: "1:709644961830:web:b12967a60fc61557873ee7",
	measurementId: "G-5HQV0X6RPH",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

AOS.init();

function App() {
	return (
		<div className="main-bg">
			<div className="w-screen flex flex-col px-5 justify-center items-center overflow-hidden">
				<LandingSection />
				<AboutSection />
				<MiddleSection
					title="Why Sponsor Us?"
					content={[
						{
							title: "Talent Pool",
							image: "/midsection/talent-pools.svg",
						},
						{
							title: "Brand Awareness",
							image: "/midsection/brand-awareness.svg",
						},
						{
							title: "Promotion",
							image: "/midsection/promotion.svg",
						},
					]}
				/>
				<MiddleSection
					title="Why Partnership with us?"
					content={[
						{
							title: "Adding value to Community",
							image: "/midsection/value.svg",
						},
						{
							title: "Promotion",
							image: "/midsection/promotion.svg",
						},
						{
							title: "Community Reach",
							image: "/midsection/community-reach.svg",
						},
					]}
				/>
				<Prizes
					title="Prizes"
					content={[
						
						{
							title: "Wireless Mouse",
							image: "/midsection/mouse.jpeg",
						},
						{
							title: "Goodies",
							image: "/prize.JPG",
						},
						{
							title: "Certificate to all Participants",
							image: "/midsection/certificate.jpg",
						},
					]}
				/>
				<MiddleSection normal title="Platform Partner" content={[
					{
						image: "/codechef.png"
					}
				]} />
				<a
					target="_blank"
					className="px-4 py-3 bg-[#BE5038] text-white font-semibold transition-colors rounded-md hover:bg-opacity-80 xl:text-xl lg:text-xl md:text-lg"
					rel="noreferrer"
					href="https://forms.gle/ChwWq6JdxWjCeerg7"
				>
					Apply As Partner
				</a>
				<LeaderBoardSection />
			</div>
		</div>
	);
}

export default App;
