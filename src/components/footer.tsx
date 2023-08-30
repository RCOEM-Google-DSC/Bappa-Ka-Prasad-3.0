export default function FooterSection() {
  return (
    <div className="mt-48 p-4 flex bg-[#3F4245] pt-20 pb-20">
      <div className="contact">
        <div className="flex ml-24 mb-2 mr-72">
          <img className='mr-6' src="/GDSC Logo.svg" alt=''/>
          <div style={{fontFamily: 'ProductSans'}} className="inline text-white">
            <h2 className="text-3xl tracking-wide mb-1">Google Developer Student Clubs</h2>
            <h3 className="text-lg leading-7">RCOEM</h3>
          </div>
        </div>
        <div className="flex mt-12 ml-48">
          <a className="mr-14" href="#"><img src="/linkedin.svg" alt=''/></a>
          <a className="mr-14" href="#"><img src="/instagram.svg" alt=''/></a>
          <a className="mr-14" href="#"><img src="/google.svg" alt=''/></a>
        </div>
        <div style={{fontFamily: 'ProductSans'}} className="mt-12 ml-48 text-white">
          <p>Copyright <sup>©</sup> 2023 All rights reserved | Google DSC RCOEM</p>
        </div>
      </div>
      <div style={{fontFamily: 'ProductSans', lineHeight: '60px'}} className="text-white text-4xl">
        <ul className="list-disc">
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Prizes</a></li>
          <li><a href='#'>Collaborators</a></li>
        </ul>
      </div>
    </div>
  );
}
