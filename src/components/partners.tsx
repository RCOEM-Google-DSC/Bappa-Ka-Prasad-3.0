export default function Parterns() {
	const images = ['BIT Mesra.png', 'DMIHER.png', 'PACE.jpeg', 'PEC.jpg', 'SIT.png'];
	return (
		<div className="w-full flex flex-col items-center mb-24">
			<div className="max-w-[1150px] w-full flex flex-col gap-10 md:gap-16">
				<div className="flex gap-3 justify-start items-center sm:justify-center">
					<img className="w-10 md:w-16" src="/prashad.svg" alt="prashad" />
					<p className="mid-section-title text-lg sm:text-xl md:text-2xl lg:text-5xl">Our Partners</p>
				</div>
				<div className="w-full flex flex-col justify-between items-center md:px-8">
					{images.map((img , i) => {
						return (
							<div key={i} className="flex flex-col justify-center items-center gap-3">
								<div
									data-aos="zoom-in-up"
									data-aos-duration="2000"
									className="aspect-video flex justify-center items-center overflow-hidden"
								>
									<img
										className="w-[min(85vw,48rem)] object-contain aspect-video"
										src={`/partners/${img}`}
										alt="Partner"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
