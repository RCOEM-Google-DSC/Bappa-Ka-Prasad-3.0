export default function LandingSection() {
	return (
		<div className="w-full flex gap-20 justify-center my-20">
			<div className="hidden sm:block" data-aos="zoom-in-right" data-aos-duration="1000">
				<img src="/landing-left.svg" alt="a" className="lg:w-[150px] sm:[130px] w-[100px]" />
			</div>
			<div
				className="flex flex-col justify-start items-center gap-10"
				data-aos="zoom-in"
				data-aos-duration="1000"
			>
				<div className="flex flex-col justify-center items-center">
					<p
						style={{ fontFamily: "Samarkan" }}
						className="text-4xl text-[#BE3F38] xl:text-8xl lg:text-6xl md:text-6xl sm:text-4xl text-center"
						id="landing_title"
					>
						bappa ka prashad
					</p>
					<img src="/3.0.svg" alt="3.0" className="mt-[-20px] sm:mt-[-50px] w-20 sm:w-auto" />
				</div>
				<div className="flex flex-col gap-4 items-center text-xl font-semibold">
					<p>An online coding contest</p>
					<p>
						<span className="text-green-600 font-bold">Event Date: </span>
						24th September, 2023
					</p>
					<p>
						<span className="text-green-600 font-bold">Event Time: </span>8 PM to 11 PM IST
					</p>
					<p>
						<span className="text-green-600 font-bold">Event Platform: </span>
						CodeChef
					</p>
					<a
						href="http://bit.ly/bkp3registration"
						target="_blank"
						rel="noreferrer"
						className="mt-4 px-3 py-2 md:px-6 md:py-3 bg-[#BE5038] text-white md:text-xl transition-colors rounded-lg hover:bg-opacity-80"
					>
						Participate
					</a>
					<div className="w-full flex justify-center mt-10">
						<img className="w-[80%] md:w-[300px]" src="qrcode.svg" alt="bappa ka prashad qr code" />
					</div>
				</div>
			</div>
			<div className="hidden sm:block" data-aos="zoom-in-left" data-aos-duration="1000">
				<img src="landing-right.svg" alt="a" className="lg:w-[150px] sm:[130px] w-[100px]" />
			</div>
		</div>
	);
}
