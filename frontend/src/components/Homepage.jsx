import React, { useState, useEffect } from "react";

export function Homepage() {
  const img = [
    "/src/images/Homepage/img1.webp",
    "/src/images/Homepage/img2.webp",
    "/src/images/Homepage/img3.webp",
    "/src/images/Homepage/img4.webp",
    "/src/images/Homepage/img5.webp",
  ];

  return (
    <div className="grid grid-cols-12 bg-zinc-100">
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
      <div className="bg-[#000f3a] h-40 "><div className="pl-30 pt-14 text-semibold text-white text-4xl flex"><div className="underline decoration-yellow-500 underline-offset-23 decoration-1">KUM</div>AR LABS</div></div>
      <img
        src={img[index]}
        alt={`Slide ${index + 1}`}
        className={`h-125 w-350 justify-self-center transition duration-[10000ms] ease-out  ${fade ? "scale-x-104" : "scale-x-100"} bg-zinc-200`}
      />
      <div>
        <h1 className="text-4xl font-extrabold mt-15 text-center text-blue-900">Identifying molecular pathways that regulate T cell responses for the benefit of treating immune-mediated disease.
        </h1>
        <h2 className="text-xl ffont-weight-[200] mt-7 text-center text-blue-900">Research Interests of the Kuchroo Laboratory</h2>
        <h3 className="text-lg mt-7 ml-30 mr-30">The major focus of research in the laboratory is the regulation of T cell responses in the context of autoimmune disease. Particular focus is given to elucidating the role of cytokines and transcription factors in the differentiation of CD4+ T helper subsets in disease, the role of co-stimulatory and co-inhibitory receptors and their ligands in the regulation of autoreactive T cell responses, and the role of the TIM family of molecules in regulating effector and regulatory T cells.</h3>
        <h3 className="text-lg mt-7 ml-30 mr-30 mb-40">The laboratory has primarily examined the autoreactive T cell response in experimental models of autoimmunity including Experimental autoimmune encephalomyelitis (EAE), type 1 diabetes, and colitis. For the study of EAE, the lab has created several models that are widely used by investigators in the field. These include models that harbor T cell reactivity to the myelin antigens myelin proteolipid protein (PLP) and myelin oligodendrocyte glycoprotein (MOG).</h3>
        

      </div>
    </div>
  );
}
