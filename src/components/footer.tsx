import { Link } from "react-router-dom";

export default function FooterSection() {
	return (
		<div className="mt-16 pb-0 bg-[#3F4245] py-20 flex-col flex w-full gap-4">
			<div className="flex justify-around w-full">
				<div className="flex gap-3 justify-center">
					<div className="text-white flex justify-center flex-col items-center">
						<img src="/GDSC Logo.svg" alt="GDSC Logo" className="h-8 mb-2" />
						<h2 className="text-lg xl:text-3xl tracking-wide mb-1 lg:text-2xl md:text-2xl whitespace-nowrap sm:text-2xl">
							Google Developer Student Clubs
						</h2>
						<h3 className="xl:text-lg leading-7 lg:text-base md:text-sm">RCOEM</h3>
						<p style={{ fontFamily: "ProductSans" }} className="text-lg xl:text-xl lg:text-xl">
							Contact us : gdsc@rknec.edu
						</p>
						<div className="flex mt-8 gap-14">
							<a className="" href="https://www.linkedin.com/company/gdsc-rcoem">
								<img src="/linkedin.svg" alt="" />
							</a>
							<a className="" href="https://www.instagram.com/gdsc_rcoem/">
								<img src="/instagram.svg" alt="" />
							</a>
							<a href="mailto:gdsc@rknec.edu">
								<img src="/google.svg" alt="" />
							</a>
						</div>
						<div
							style={{
								fontFamily: "ProductSans",
								lineHeight: "55px",
							}}
							className="justify-center xl:text-white text-4xl lg:text-3xl text-white md:text-2xl flex sm:text-xl md:hidden"
						>
							<ul className="grid grid-cols-2 list-disc text-base mt-8 gap-x-8 gap-y-2">
								<li>
									<Link to="/" onClick={() => window.scrollTo(0, 0)}>
										Home
									</Link>
								</li>
								<li>
									<a href="#about">About</a>
								</li>
								<li>
									<a href="#prizes">Prizes</a>
								</li>
								<li>
									<Link to="/partners" onClick={() => window.scrollTo(0, 0)}>
										Partners
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div
					style={{ fontFamily: "ProductSans", lineHeight: "55px" }}
					className="max-md:hidden flex flex-end xl:text-white text-4xl lg:text-3xl text-white md:text-2xl lg:flex sm:text-xl lg:pl-20"
				>
					<ul className="list-disc text-xl xl:text-2xl flex flex-col gap-5">
						<li>
							<Link to="/" onClick={() => window.scrollTo(0, 0)}>
								Home
							</Link>
						</li>
						<li>
							<a href="/#about">About</a>
						</li>
						<li>
							<a href="/#prizes">Prizes</a>
						</li>
						<li>
							<Link to="/partners" onClick={() => window.scrollTo(0, 0)}>
								Partners
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div
				style={{ fontFamily: "ProductSans" }}
				className="mt-8 bg-gray-800 text-gray-300 text-center p-2 py-8 w-full"
			>
				<p>Copyright © 2023 All rights reserved | Google DSC RCOEM</p>
			</div>
		</div>
	);
}
