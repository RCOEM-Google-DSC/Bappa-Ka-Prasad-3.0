export default function GDSC({ name }: GDSCProps) {
	return (
		<div data-aos="zoom-in-up" data-aos-duration="500" className="flex flex-col items-center justify-center py-12 w-72 h-56">
			<img src="/logo.svg" alt="gdsc" className="h-8 mb-2" />
			<p className="font-sans text-slate-500 tracking-wide text-xl font-medium text-center">
				Google Developer Student Clubs
			</p>
			<span className="font-sans text-slate-500 text-center">{name}</span>
		</div>
	);
}

interface GDSCProps {
	name: string;
}
