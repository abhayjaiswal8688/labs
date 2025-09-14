import React, { useEffect, useRef } from "react";

const resourcesData = [
  {
    title: "KARYOTYPE FACILITY",
    description:
      "Our lab is equipped with Fluorescence in Situ Hybridization (FISH) microscopy, This aids in identifying chromosomal aberrations, gene amplifications, and translocations linked to various cancer types.",
    color: "blue",
    images: ["/Resources/p1.png", "/Resources/p2.png"],
  },
  {
    title: "NGS FACILITY",
    description:
      "We are also Equipped with an iSeq sequencer, we possess the ability to perform next-generation sequencing (NGS) with high accuracy and throughput.",
    color: "green",
    images: ["/Resources/p3.png", "/Resources/p4.png"],
  },
  {
    title: "MICROARRAY FACILITY",
    description:
      "Our lab houses a state-of-the-art Microarray facility, featuring only two such machines across the entire nation. This technology enables high-throughput analysis of gene expression, genotyping, and DNA methylation patterns, allowing us to unravel the intricate genetic signatures underlying various diseases in the Jammu and Kashmir population.",
    color: "red",
    images: ["/Resources/p5.png", "/Resources/p6.png", "/Resources/p7.png", "/Resources/p8.png"],
  },
];

const colorMap = {
  blue: "from-blue-400",
  green: "from-green-400",
  red: "from-red-400",
};

const ResourceSection = ({ resource, index }) => {
  useEffect(() => {
    const images = document.querySelectorAll(`.img-fade-${index}`);
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    images.forEach((img) => observer.observe(img));
  }, [index]);

  const bgClass = index % 2 === 0 ? "bg-white" : "bg-gray-50";

  return (
    <div>
    <section className={`${bgClass} mb-16 p-8 md:p-10 rounded-lg shadow fade-in`}>
      {/* Decorative line for mobile */}
      <div className="block md:hidden h-1 w-16 bg-gradient-to-r from-gray-400 to-transparent rounded mb-2"></div>

      <div className="flex items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 whitespace-nowrap">
          {resource.title}
        </h2>
        <div
          className={`flex-grow h-1 rounded ml-4 bg-gradient-to-r from-${resource.color}-400 to-transparent`}
        ></div>
      </div>

      <p className="mb-8 text-gray-700 text-sm md:text-base">{resource.description}</p>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          resource.images.length === 4 ? "lg:grid-cols-4" : ""
        } gap-6`}
      >
        {resource.images.map((img, i) => (
          <div key={i} className="w-full h-64 overflow-hidden rounded shadow">
            <img
              src={img}
              alt={`${resource.title} Image ${i + 1}`}
              className={`w-full h-full object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl img-fade-${index}`}
            />
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};


export function Resources() {
  return (
    <div>
       <div className="bg-[#000f3a] h-40 "><div className="pl-10 pt-14 text-semibold text-white text-2xl md:text-3xl flex md:pl-30"><div className="underline decoration-yellow-500 underline-offset-23 decoration-1">RES</div>OURCES</div></div>
    <div className="bg-gray-100 p-4 md:p-8">
      {resourcesData.map((resource, index) => (
        <ResourceSection key={index} resource={resource} />
      ))}
    </div>
    </div>
  );
}
