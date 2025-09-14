import React, { useState, useEffect } from "react";

export function Homepage() {
  const img = [
    "/Homepage/img1.webp",
    "/Homepage/img2.jpg",
    "/Homepage/img3.webp",
    "/Homepage/img4.webp",
    "/Homepage/img5.webp"
  ];

  return (
    <div className="grid grid-cols-12">
      <Slideshow img={img} />
    </div>
  );
}

function Slideshow({ img }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [line, setLine] = useState(false);
  const [open,setOpen]=useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setLine(false);
      setIndex((prev) => (prev + 1) % img.length); 
      setTimeout(() => {
        setFade(true); 
      }, 5000); 
    }, 10000); 
    return () => clearInterval(interval); 
  }, [img.length]);
  
  return (
    <div className="col-span-12">
      <style>{`
        .logo-slider {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .logo-track {
          display: flex;
          width: max-content;
          animation: scroll-logos 18s linear infinite;
        }
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="bg-[#000f3a] h-40 "><div className="pl-10 pt-14 text-semibold text-white text-2xl md:text-3xl flex md:pl-30"><div className="underline decoration-yellow-500 underline-offset-23 decoration-1">KUM</div>AR LABS</div></div>
      <img
        src={img[index]}
        alt={`Slide ${index + 1}`}
        className={`h-80 w-150 md:h-130 md:w-350 justify-self-center transition duration-[10000ms] ease-out  ${fade ? "scale-x-106" : "scale-x-100"} bg-zinc-200`}
      />
      <div>
  {/* Main Heading */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-15 text-center text-blue-900">
    CENTRE FOR HUMAN GENOMICS
  </h1>

  {/* Subheading */}
  <h2 className="text-xl sm:text-2xl md:text-2xl font-light mt-7 text-center text-blue-900">
    Welcome to Kumar's Lab
  </h2>

  {/* Paragraph */}
  <h3 className="text-sm sm:text-base md:text-lg mt-7 ml-5 md:ml-30 md:mr-30">
    Kumar Lab focuses on understanding the patterns and underlying mechanisms of Cancer Biology, we are situated in Shri Mata Vaishno Devi University, Katra where we are proud to have created a creative, collaborative, and open-minded Research Lab.
  </h3>

  {/* Another Subheading */}
  <h2 className="text-xl sm:text-2xl md:text-2xl font-light mt-7 text-center text-blue-900">
    From Curiosity to Clarity: Capturing the Essence of Our Research at SMVDU
  </h2>

  {/* Paragraph */}
  <h3 className="text-sm sm:text-base md:text-lg mt-7 ml-5 md:ml-30 md:mr-30">
    The Centre for Human Genomics at Shri Mata Vaishno Devi University in Katra is dedicated to contributing to the advancement of research in the field of lung cancer genetics, with a specific emphasis on the people of Jammu and Kashmir. Our laboratory is equipped with state-of-the-art genomic technologies, including Next-Generation Sequencing (NGS), Sanger Sequencing, Microarray, Massarray, Fluorescence in Situ Hybridization (FISH) System, and Real-time PCR, which permit us to undertake in-depth genomic investigations.
  </h3>

  {/* Expanded List */}
  {open && (
    <>
      <ul className="list-disc mt-7 ml-5 md:ml-30 md:mr-30">
        <li className="text-sm sm:text-base md:text-lg mb-4">
          The Centre for Human Genomics Exploring Genetic Frontiers: Our lab delves into the intricate genetics underlying all cancer types within Jammu and Kashmir's diverse population. Unveiling novel insights, we decipher the unique genomic landscape to unravel predisposition, risk factors, and potential therapeutic avenues, driving advancements in personalized cancer care.
        </li>
        <li className="text-sm sm:text-base md:text-lg mb-4">
          Genome-wide association studies had previously whispered about the involvement of single-nucleotide polymorphisms (SNPs) from different genes in Cancer development, but their voice remained unheard in the context of J&K's unique genetic tapestry.
        </li>
        <li className="text-sm sm:text-base md:text-lg">
          Our research not only beckons us to contemplate the striking genetic dance between different genes and Cancer in the J&K population but also ignites the flames of curiosity—calling for a grander stage, a larger sample size, and further exploration of the different genes' intricate roles.
        </li>
      </ul>
    </>
  )}

  {/* Read More / Read Less */}
  <h3
    className="text-sm sm:text-base md:text-lg mt-7 ml-5 md:ml-30 md:mr-30 mb-20 hover:cursor-pointer hover:text-green-900"
    onClick={() => setOpen(!open)}
  >
    {open ? "READ LESS" : "READ MORE"}
  </h3>
</div>

{/* achivements */}
<div className="w-full overflow-hidden bg-gray-100">
  {/* Title */}
  <div className="flex items-center py-4">
    <div className="w-12 h-px bg-green-600"></div>
    <span className="flex-shrink text-3xl text-blue-900 px-4 text-left font-bold">
      ACHIEVEMENTS
    </span>
    <div className="flex-grow h-px bg-green-600"></div>
  </div>

  {/* Images */}
  <div className="flex flex-col md:flex-row justify-evenly items-center">
    <img
      src="/Homepage/achive.png"
      className="mt-10 h-60 mb-20 transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:shadow-2xl cursor-pointer"
    />
    <img
      src="/Homepage/achive2.png"
      className="mt-10 h-60 mb-20 transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:shadow-2xl cursor-pointer"
    />
    <img
      src="/Homepage/achive3.png"
      className="mt-10 h-60 mb-20 transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:shadow-2xl cursor-pointer"
    />
  </div>
</div>

<div className="w-full overflow-hidden ">
<div class="flex items-center py-4">
<div className="flex items-center py-4 w-full">
  {/* Left line */}
  <div className="w-6 sm:w-12 h-px bg-green-600"></div>

  {/* Title */}
  <span className="flex-shrink-0 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-900 px-2 sm:px-4 font-bold">
    {/* Short text for small screens */}
    <span className="block md:hidden">COLLABORATIONS</span>

    {/* Full text for medium and larger screens */}
    <span className="hidden md:block">INTERNATIONAL AND NATIONAL COLLABORATIONS</span>
  </span>

  {/* Right line */}
  <div className="flex-grow h-px bg-green-600"></div>
</div>

</div>
  <ul className="logo-track flex items-center">
    <li><img src="/Homepage/1.png" /></li>
    <li><img src="/Homepage/2.png" /></li>
    <li><img src="/Homepage/3.png" /></li>
    <li><img src="/Homepage/4.png" /></li>
    <li><img src="/Homepage/5.png" /></li>
    <li><img src="/Homepage/6.png" /></li>
    <li><img src="/Homepage/7.png" /></li>
    <li><img src="/Homepage/8.png" /></li>
    <li><img src="/Homepage/9.png" /></li>
    <li><img src="/Homepage/10.png" className="bg-white" /></li>
    <li><img src="/Homepage/11.png" /></li>
    <li><img src="/Homepage/12.png" /></li>
    <li><img src="/Homepage/13.png" /></li>
    <li><img src="/Homepage/14.png" /></li>
    <li><img src="/Homepage/15.png" /></li>
    <li><img src="/Homepage/16.png" /></li>
    <li><img src="/Homepage/17.png" /></li>
    <li><img src="/Homepage/18.png" /></li>
    <li><img src="/Homepage/19.png" /></li>
    <li><img src="/Homepage/1.png" /></li>
    <li><img src="/Homepage/2.png" /></li>
    <li><img src="/Homepage/3.png" /></li>
    <li><img src="/Homepage/4.png" /></li>
    <li><img src="/Homepage/5.png" /></li>
    <li><img src="/Homepage/6.png" /></li>
    <li><img src="/Homepage/7.png" /></li>
    <li><img src="/Homepage/8.png" /></li>
    <li><img src="/Homepage/9.png" /></li>
    <li><img src="/Homepage/10.png" /></li>
    <li><img src="/Homepage/11.png" /></li>
    <li><img src="/Homepage/12.png" /></li>
    <li><img src="/Homepage/13.png" /></li>
    <li><img src="/Homepage/14.png" /></li>
    <li><img src="/Homepage/15.png" /></li>
    <li><img src="/Homepage/16.png" /></li>
    <li><img src="/Homepage/17.png" /></li>
    <li><img src="/Homepage/18.png" /></li>
    <li><img src="/Homepage/19.png" /></li>
  </ul>
</div>
<div className="w-full overflow-hidden bg-gray-100">
  {/* Title */}
  <div className="flex items-center py-4">
    <div className="w-12 h-px bg-green-600"></div>
    <span className="flex-shrink text-2xl sm:text-3xl text-blue-900 px-4 text-left font-bold">
      SPONSORS
    </span>
    <div className="flex-grow h-px bg-green-600"></div>
  </div>

  {/* Sponsor Logos */}
  <ul className="flex justify-center">
    <li>
      <img
        src="/Homepage/sponsors.png"
        className="mt-10 mb-20 h-60 sm:h-28 md:h-40 lg:h-100 object-contain transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:shadow-2xl cursor-pointer"
        alt="Sponsor"
      />
    </li>
  </ul>
</div>


    </div>
  );
}
