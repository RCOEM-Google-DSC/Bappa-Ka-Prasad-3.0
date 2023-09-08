export default function FooterSection() {
  return (
    <div className="mt-48 p-4 bg-[#3F4245] pb-20 flex flex-col-reverse xl:flex xl:flex-row xl:pt-20 lg:flex-row lg:pt-20  md:flex md:flex-col-reverse sm:flex flex-col-reverse">
      <div className="contact">
        <div className="justify-center flex xl:ml-36 xl:mr-96 mb-2 lg:ml-32 lg:mr-64">
          <img className='mr-4' src="/GDSC Logo.svg" alt=''/>
          <div style={{fontFamily: 'ProductSans'}} className="inline text-white">
            <h2 className="text-lg xl:text-3xl tracking-wide mb-1 lg:text-2xl md:text-2xl whitespace-nowrap sm:text-2xl">Google Developer Student Clubs</h2>
            <h3 className="xl:text-lg leading-7 lg:text-base md:text-sm">RCOEM</h3>
          </div>
        </div>
        <div className="justify-center flex mt-12 xl:ml-64 xl:justify-start lg:ml-60 lg:justify-start">
          <a className="mr-14" href="https://www.linkedin.com/company/gdsc-rcoem"><img src="/linkedin.svg" alt=''/></a>
          <a className="mr-14" href="https://www.instagram.com/gdsc_rcoem/"><img src="/instagram.svg" alt=''/></a>
          <a className="mr-14" href="mailto:dsc.rknec@gmail.com"><img src="/google.svg" alt=''/></a>
        </div>
        <div style={{fontFamily: 'ProductSans'}} className="text-center mt-12 ml-0 text-sm xl:ml-64 xl:text-lg xl:text-left lg:ml-60 lg:text-left lg:text-base text-white md:text-center md:text-base sm:text-center sm:text-sm">
          <p>Copyright <sup>©</sup> 2023 All rights reserved | Google DSC RCOEM</p>
        </div>
      </div>
      <div style={{fontFamily: 'ProductSans', lineHeight: '55px'}} className="text-lg xl:text-white text-4xl lg:text-3xl text-white md:text-2xl mb-4 flex justify-center sm:text-xl">
        <ul className="flex list-none xl:inline xl:list-disc lg:inline lg:list-disc md:flex sm:flex">
          <li className="ml-0 mr-7 xl:ml-0 lg:ml-0 md:ml-24 md:mr-24 sm:mr-20"><a href='#'>Home</a></li>
          <li className="mr-7 md:mr-24 sm:mr-20"><a href='#'>About</a></li>
          <li className="mr-7 md:mr-24 sm:mr-20"><a href='#'>Prizes</a></li>
          <li className="md:mr-24 sm:mr-0"><a href='#'>Collaborators</a></li>
        </ul>
      </div>
    </div>
  );
}
