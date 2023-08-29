export default function AboutSection() {
  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center my-20">
      <div>
        <img src="/about_title.svg" alt="title" />
      </div>

      <div className="w-full flex flex-col justify-center items-center px-10 gap-6 md:flex-row">
        <div className="text-gradient flex flex-col gap-5">
          <p className="text-4xl font-bold">What is Bappa ka Prashad?</p>
          <p className="max-w-3xl font-semibold text-lg">
            Ganesh Chaturthi marks the birth of Lord Ganesha; the Lord of knowledge, wisdom,
            prosperity and good fortune. During Ganesh Chaturthi, we distribute Prasad and sweets
            among our loved ones with joy and spirit. Similarly, this event was introduced with the
            motivation of distributing the Prasad of coding and knowledge through competitive coding
            among all the participants.
          </p>
        </div>
        <div>
          <img src="/about.png" alt="image" className="max-w-[350px]" />
        </div>
      </div>
    </div>
  );
}
