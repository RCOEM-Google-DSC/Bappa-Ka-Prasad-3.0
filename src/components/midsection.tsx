export default function MiddleSection({ title, content, normal }: MiddleSectionProps) {
	const round = normal ? "" : "rounded-full w-[250px]";
	return (
		<div className="w-full flex flex-col items-center mb-24">
			<div className="max-w-[1150px] w-full flex flex-col gap-10 md:gap-16">
				<div className="flex gap-3 justify-start items-center sm:justify-center">
					<img className="w-10 md:w-16" src="/prashad.svg" alt="prashad" />
					<p className="mid-section-title text-lg sm:text-xl md:text-2xl lg:text-5xl">{title}</p>
				</div>
				<div className="w-full flex flex-col md:flex-row gap-32 justify-center items-center md:px-8">
					{content.map((item: contentInterface, i: number) => {
						return (
							<div key={i} className="flex flex-col justify-center items-center gap-3">
								<div
									data-aos="zoom-in-up"
									data-aos-duration="2000"
									className={"flex justify-center items-center overflow-hidden " + round}
								>
									<img
										className="w-full h-[250px] object-cover"
										src={item.image ? item.image : "#"}
										alt={item.title || "img"}
									/>
								</div>
								<p className="text-lg font-semibold text-gradient2" key={i}>
									{item.title}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

interface contentInterface {
	title?: string;
	image?: string;
}

interface MiddleSectionProps {
	title: string;
	content: contentInterface[];
	normal?: boolean;
}