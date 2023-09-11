interface contentInterface {
  title: string;
  image?: string;
}

export default function MiddleSection({
  title,
  content,
}: {
  title: string;
  content: contentInterface[];
}) {
  return (
    <div className="w-full flex flex-col items-center mb-24">
      <div className="max-w-[1150px] w-full flex flex-col gap-10 md:gap-16">
        <div className="flex gap-3 justify-start items-center sm:justify-center">
          <img className="w-10 md:w-16" src="/prasad.svg" alt="prasad" />
          <p className="mid-section-title text-lg sm:text-xl md:text-2xl lg:text-5xl">{title}</p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6 justify-between items-center">
          {content.map((item: contentInterface, i: number) => {
            return (
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="w-[300px] rounded-full flex justify-center items-center overflow-hidden">
                  <img
                    className="w-full h-[300px] object-cover"
                    src={item.image ? item.image : "#"}
                    alt={item.title}
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
