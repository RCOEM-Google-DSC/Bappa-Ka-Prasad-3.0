import { Button } from "./ui/button";
import { HiBars2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function Navbar() {
	return (
		<nav className="flex justify-between p-6 gap-4 items-center sticky top-0 bg-white z-10">
			<div className="flex gap-4 items-center">
				<a href="/">
					<img src="/logo.svg" alt="logo" />
				</a>
				<div>
					<p className="hidden sm:block">Google Developer Student Clubs</p>
					<p className="sm:hidden">GDSC</p>
					<p>RCOEM</p>
				</div>
			</div>
			<div className="hidden justify-center gap-3 items-center lg:flex">
				<Link
					to="/"
					className="px-3 py-2 hover:bg-gray-200 transition-colors rounded-md text-[#898A99] hover:text-gray-600"
				>
					Home
				</Link>
				<a
					href="/#about"
					className="px-3 py-2 hover:bg-gray-200 transition-colors rounded-md text-[#898A99] hover:text-gray-600"
				>
					About
				</a>
				<a
					href="/#prizes"
					className="px-3 py-2 hover:bg-gray-200 transition-colors rounded-md text-[#898A99] hover:text-gray-600"
				>
					Prizes
				</a>
				<a
					href="/#leaderboard"
					className="px-3 py-2 hover:bg-gray-200 transition-colors rounded-md text-[#898A99] hover:text-gray-600"
				>
					Leaderboard
				</a>
				<Link
					to="/partners"
					className="px-3 py-2 hover:bg-gray-200 transition-colors rounded-md text-[#898A99] hover:text-gray-600"
				>
					Partners
				</Link>
				<a
					href="http://bit.ly/bkp3registration"
					target="_blank"
					rel="noreferrer"
					className="px-3 py-2 bg-[#BE5038] text-white transition-colors rounded-md hover:bg-opacity-80"
				>
					Participate
				</a>
			</div>
			<div className="flex lg:hidden">
				<Popover>
					<PopoverTrigger>
						<Button variant="outline" className="text-3xl">
							<HiBars2 />
						</Button>
					</PopoverTrigger>
					<PopoverContent>
						<div className="flex flex-col justify-center gap-3 items-stretch">
							<Link
								to="/"
								className="px-3 py-2 hover:bg-gray-200 transition-colors rounded-md text-[#898A99] hover:text-gray-600"
							>
								Home
							</Link>
							<a
								href="/#about"
								className="px-3 py-2 hover:bg-gray-200 transition-colors rounded-md text-[#898A99] hover:text-gray-600"
							>
								About
							</a>
							<a
								href="/#prizes"
								className="px-3 py-2 hover:bg-gray-200 transition-colors rounded-md text-[#898A99] hover:text-gray-600"
							>
								Prizes
							</a>
							<Link
								to="/partners"
								className="px-3 py-2 hover:bg-gray-200 transition-colors rounded-md text-[#898A99] hover:text-gray-600"
							>
								Partners
							</Link>
							<a
								href="http://bit.ly/bkp3registration"
								target="_blank"
								rel="noreferrer"
								className="px-3 py-2 bg-[#BE5038] text-white transition-colors text-center rounded-md hover:bg-opacity-80"
							>
								Participate
							</a>
						</div>
					</PopoverContent>
				</Popover>
			</div>
		</nav>
	);
}
