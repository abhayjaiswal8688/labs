import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const img = [
  "/src/images/photo-gallery/img1.jpg",
  "/src/images/photo-gallery/img2.jpg",
  "/src/images/photo-gallery/img3.jpg",
  "/src/images/photo-gallery/img4.jpg",
  "/src/images/photo-gallery/img5.jpg",
  "/src/images/photo-gallery/img6.jpg",
  "/src/images/photo-gallery/img7.jpg"
];

function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr(curr === 0 ? img.length - 1 : curr - 1);
  const next = () => setCurr(curr === img.length - 1 ? 0 : curr + 1);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            {slide}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <div>
    <div className="bg-[#000f3a] h-40 "><div className="pl-30 pt-14 text-semibold text-white text-4xl flex"><div className="underline decoration-yellow-500 underline-offset-23 decoration-1">GAL</div>LERY</div></div>
    <div className="max-w-8xl">
      <Carousel>
        {img.map((s, i) => (
          <img key={i} src={s} className="w-full h-150 object-cover" />
        ))}
      </Carousel>
    </div>
    </div>
  );
}
