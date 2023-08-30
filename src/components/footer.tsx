export default function FooterSection() {
  return (
    <div className="mt-48 p-4 bg-[#3F4245] pb-20 flex flex-col-reverse xl:flex xl:flex-row xl:pt-20 lg:flex-row lg:pt-20  md:flex md:flex-col-reverse sm:flex flex-col-reverse">
      <div className="contact">
        <div className="ml-0 flex xl:ml-24 mb-2 mr-72 lg:ml-24 md:ml-48  sm:ml-24">
          <img className='mr-6' src="/GDSC Logo.svg" alt=''/>
          <div style={{fontFamily: 'ProductSans'}} className="inline text-white">
            <h2 className="text-lg xl:text-3xl tracking-wide mb-1 lg:text-2xl md:text-2xl whitespace-nowrap sm:text-2xl">Google Developer Student Clubs</h2>
            <h3 className="xl:text-lg leading-7 lg:text-base md:text-sm">RCOEM</h3>
          </div>
        </div>
        <div className="justify-center flex mt-12 xl:ml-48 xl:justify-start lg:ml-48 lg:justify-start md:justify-center sm:justify-center">
          <a className="mr-14" href="#"><img src="/linkedin.svg" alt=''/></a>
          <a className="mr-14" href="#"><img src="/instagram.svg" alt=''/></a>
          <a className="mr-14" href="#"><img src="/google.svg" alt=''/></a>
        </div>
        <div style={{fontFamily: 'ProductSans'}} className="mt-12 xl:ml-48 xl:text-left lg:ml-48 lg:text-left text-white md:text-center sm:text-center">
          <p>Copyright <sup>©</sup> 2023 All rights reserved | Google DSC RCOEM</p>
        </div>
      </div>
      <div style={{fontFamily: 'ProductSans', lineHeight: '60px'}} className="text-xl xl:text-white text-4xl lg:text-3xl text-white md:text-2xl mb-4 flex justify-center sm:text-xl">
        <ul className="flex xl:inline list-disc lg:inline md:flex sm:flex">
          <li className="ml-0 mr-7 xl:ml-0 lg:ml-0 md:ml-8 mr-12 sm:mr-12"><a href='#'>Home</a></li>
          <li className="mr-7 md:mr-12 sm:mr-12"><a href='#'>About</a></li>
          <li className="mr-7 md:mr-12 sm:mr-12"><a href='#'>Prizes</a></li>
          <li className="md:mr-12 sm:mr-12"><a href='#'>Collaborators</a></li>
        </ul>
      </div>
    </div>
  );
}
