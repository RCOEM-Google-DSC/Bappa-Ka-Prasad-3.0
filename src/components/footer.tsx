export default function FooterSection() {
  return (
    <div className="mt-16 p-4 bg-[#3F4245] py-20 grid grid-cols-1 lg:grid-cols-2 w-full overflow-hidden gap-4 lg:gap-10">
      <div className="w-full flex gap-3 justify-center">
        <div>
          <img src="/GDSC Logo.svg" alt="GDSC Logo" />
        </div>
        <div className="text-white">
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
          <div style={{ fontFamily: "ProductSans" }} className="mt-8">
            <p>Copyright © 2023 All rights reserved | Google DSC RCOEM</p>
          </div>
          <div
            style={{ fontFamily: "ProductSans", lineHeight: "55px" }}
            className="w-full xl:text-white text-4xl lg:text-3xl text-white md:text-2xl flex sm:text-xl pl-4 lg:hidden"
          >
            <ul className="grid grid-cols-2 list-disc text-base mt-8">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#prizes">Prizes</a>
              </li>
              <li>
                <a href="#collaborators">Collaborators</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{ fontFamily: "ProductSans", lineHeight: "55px" }}
        className="hidden w-full xl:text-white text-4xl lg:text-3xl text-white md:text-2xl lg:flex sm:text-xl lg:pl-20"
      >
        <ul className="list-disc text-xl xl:text-2xl flex flex-col gap-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#prizes">Prizes</a>
          </li>
          <li>
            <a href="#collaborators">Collaborators</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
