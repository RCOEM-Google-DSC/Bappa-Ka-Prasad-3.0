export default function GDSC({ name }: GDSCProps) {
	return (
		<div
			data-aos="zoom-in-up"
			data-aos-duration="500"
			className="flex flex-col items-center justify-start py-12 w-80 h-64"
		>
			<img src="/logo.svg" alt="gdsc" className="h-8 mb-2" />
			<p className="font-sans text-slate-500 tracking-wide text-xl font-medium text-center">
				Google Developer Student Clubs
			</p>
			<span className="font-sans text-slate-500 text-center w-4/5">{name}</span>
		</div>
	);
}

interface GDSCProps {
	name: string;
}
