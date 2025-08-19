import React, { useState, useEffect } from "react";

export function Homepage() {
  const img = [
    "/src/images/Homepage/img1.webp",
    "/src/images/Homepage/img2.jpg",
    "/src/images/Homepage/img3.webp",
    "/src/images/Homepage/img4.webp",
    "/src/images/Homepage/img5.webp"
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
        <h1 className="text-5xl font-extrabold mt-15 text-center text-blue-900">CENTRE FOR HUMAN GENOMICS
        </h1>
        <h2 className="text-2xl ffont-weight-[200] mt-7 text-center text-blue-900">Welcome to Kumar's Lab
        </h2>
        <h3 className="text-lg mt-7 ml-5 md:ml-30 md:mr-30">Kumar Lab focuses on understanding the patterns and underlying mechanisms of Cancer Biology, we are situated in Shri Mata Vaishno Devi University, Katra where we are proud to have created a creative, collaborative, and open-minded Research Lab.
        </h3>
        <h2 className="text-2xl ffont-weight-[200] mt-7 text-center text-blue-900">From Curiosity to Clarity: Capturing the Essence of Our Research at SMVDU

        </h2>
        <h3 className="text-lg mt-7 ml-5 md:ml-30 md:mr-30">The Centre for Human Genomics at Shri Mata Vaishno Devi University in Katra is dedicated to contributing to the advancement of research in the field of lung cancer genetics, with a specific emphasis on the people of Jammu and Kashmir. Our laboratory is equipped with state-of-the-art genomic technologies, including Next-Generation Sequencing (NGS), Sanger Sequencing, Microarray, Massarray, Fluorescence in Situ Hybridization (FISH) System, and Real-time PCR, which permit us to undertake in-depth genomic investigations.</h3>
        <h3 className="text-lg list-disc mt-7 ml-5 md:ml-30 md:mr-30"><li>The Centre for Human Genomics Exploring Genetic Frontiers: Our lab delves into the intricate genetics underlying all cancer types within Jammu and Kashmir's diverse population. Unveiling novel insights, we decipher the unique genomic landscape to unravel predisposition, risk factors, and potential therapeutic avenues, driving advancements in personalized cancer care.</li>
        </h3>
        <h3 className="text-lg list-disc mt-7 ml-5 md:ml-30 md:mr-30"><li>Genome-wide association studies had previously whispered about the involvement of single-nucleotide polymorphisms (SNPs) from different genes in Cancer development, but their voice remained unheard in the context of J&K's unique genetic tapestry. 
        </li>
        </h3>
         <h3 className="text-lg list-disc mt-7 ml-5 md:ml-30 md:mr-30 mb-40"><li>Our research not only beckons us to contemplate the striking genetic dance between different genes and Cancer in the J&K population but also ignites the flames of curiosity—calling for a grander stage, a larger sample size, and further exploration of the different genes' intricate roles.
        </li>
        </h3>
      </div>
      <div className="w-full overflow-hidden">
  <h2 className="text-4xl font-bold mt-7 text-center text-blue-900">ACHIEVEMENTS</h2>
  <div className="flex justify-evenly items-center">
    <img
      src="/src/images/Homepage/achive.png"
      className="mt-10 h-60 mb-20 transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:shadow-2xl cursor-pointer"
    />
    <img
      src="/src/images/Homepage/achive2.png"
      className="mt-10 h-60 mb-20 transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:shadow-2xl cursor-pointer"
    />
    <img
      src="/src/images/Homepage/achive3.png"
      className="mt-10 h-60 mb-20 transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 hover:shadow-2xl cursor-pointer"
    />
  </div>
</div>



      <div className="w-full overflow-hidden">
      <h2 className="text-4xl font-bold mt-7 text-center text-blue-900">FUNDING AGENCIES
      <ul className="items-center">
      <li><img src="/src/images/Homepage/sponsors.png" className="mt-10 ml-65 h-100 mb-20" /></li>
      </ul>
</h2>
      </div>
      <div className="w-full overflow-hidden">
      <h2 className="text-4xl font-bold mt-7 text-center text-blue-900">INTERNATIONAL & NATIONAL COLLABORATIONS

      </h2>
  <ul className="logo-track flex items-center">
    <li><img src="/src/images/Homepage/1.png" /></li>
    <li><img src="/src/images/Homepage/2.png" /></li>
    <li><img src="/src/images/Homepage/3.png" /></li>
    <li><img src="/src/images/Homepage/4.png" /></li>
    <li><img src="/src/images/Homepage/5.png" /></li>
    <li><img src="/src/images/Homepage/6.png" /></li>
    <li><img src="/src/images/Homepage/7.png" /></li>
    <li><img src="/src/images/Homepage/8.png" /></li>
    <li><img src="/src/images/Homepage/9.png" /></li>
    <li><img src="/src/images/Homepage/10.png" className="bg-white" /></li>
    <li><img src="/src/images/Homepage/11.png" /></li>
    <li><img src="/src/images/Homepage/12.png" /></li>
    <li><img src="/src/images/Homepage/13.png" /></li>
    <li><img src="/src/images/Homepage/14.png" /></li>
    <li><img src="/src/images/Homepage/15.png" /></li>
    <li><img src="/src/images/Homepage/16.png" /></li>
    <li><img src="/src/images/Homepage/17.png" /></li>
    <li><img src="/src/images/Homepage/18.png" /></li>
    <li><img src="/src/images/Homepage/19.png" /></li>
    <li><img src="/src/images/Homepage/1.png" /></li>
    <li><img src="/src/images/Homepage/2.png" /></li>
    <li><img src="/src/images/Homepage/3.png" /></li>
    <li><img src="/src/images/Homepage/4.png" /></li>
    <li><img src="/src/images/Homepage/5.png" /></li>
    <li><img src="/src/images/Homepage/6.png" /></li>
    <li><img src="/src/images/Homepage/7.png" /></li>
    <li><img src="/src/images/Homepage/8.png" /></li>
    <li><img src="/src/images/Homepage/9.png" /></li>
    <li><img src="/src/images/Homepage/10.png" /></li>
    <li><img src="/src/images/Homepage/11.png" /></li>
    <li><img src="/src/images/Homepage/12.png" /></li>
    <li><img src="/src/images/Homepage/13.png" /></li>
    <li><img src="/src/images/Homepage/14.png" /></li>
    <li><img src="/src/images/Homepage/15.png" /></li>
    <li><img src="/src/images/Homepage/16.png" /></li>
    <li><img src="/src/images/Homepage/17.png" /></li>
    <li><img src="/src/images/Homepage/18.png" /></li>
    <li><img src="/src/images/Homepage/19.png" /></li>
  </ul>
</div>
    </div>
  );
}
