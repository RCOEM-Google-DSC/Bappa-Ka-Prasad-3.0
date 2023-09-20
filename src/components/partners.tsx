import GDSC from "./gdsc";

export default function Partners() {
	const partners = [
		"J D College of Engineering & Management",
		"Symbiosis Institute of Technology, Nagpur",
		"P.A College of Engineering",
		"BIT Mesra, Patna Campus",
		"Pragati Engineering College",
		"Datta Meghe Institute of Higher Education & Research",
		"PRMITR, Badnera-Amravati",
		"Cummins College of Engineering For Women, Nagpur",
		"Sinhgad Institue of Technology and Science",
	];
	return (
		<div className="w-full flex items-center p-12 justify-center">
			<div className="max-w-[1150px] w-full flex flex-col gap-10 md:gap-16 items-center justify-center">
				<div className="flex gap-3 justify-center items-center">
					<img className="w-10 md:w-16" src="/prashad.svg" alt="prashad" />
					<p className="mid-section-title text-5xl max-md:text-2xl">Our Partners</p>
				</div>
				<div className="w-full gap-8 gap-y-16 flex flex-wrap max-md:justify-center justify-between items-center md:px-8">
					{partners.map((p, i) => {
						return <GDSC key={i} name={p} />;
					})}
				</div>
			</div>
		</div>
	);
}
