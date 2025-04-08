const slides = [
  { label: "Folding", src: "/src/assets/folding.png" },
  { label: "Wash & Dry", src: "/src/assets/wash.png" },
  { label: "Pressing", src: "/src/assets/pressing.png" },
  { label: "Dry Clean", src: "/src/assets/dry.png" },
];

const services = [
  { label: "FOLD", price: "₱500", src: "./fold.svg" },
  { label: "WASH & DRY", price: "₱700", src: "./wash-and-dry.svg" },
  { label: "PRESSING", price: "₱600", src: "./pressing.svg" },
  { label: "DRY CLEAN", price: "₱800", src: "./dry-clean.svg" },
];

export default function Home() {
  return (
    <>
      {/* Our Prices Section */}
      <main className="w-full h-screen flex justify-center items-center bg-[lightyellow]">
        <div>
          <div className="text-center text-[2.5rem] mb-[1.5rem] font-[Poppins]">
            OUR PRICES
          </div>
          <div className="flex justify-evenly items-center gap-[2rem] flex-wrap">
            {services.map((service, index) => (
              <button
                key={index}
                type="button"
                className="w-[200px] h-[300px] bg-[lightblue] border-[5px] border-[#0d47a1] rounded flex justify-center items-center hover:scale-90 transition-transform duration-500"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={service.src}
                    alt={service.label}
                    className="w-[90px]"
                  />
                  <div className="text-[1rem] mt-4 text-center">{service.label}</div>
                  <div className="text-lg">{service.price}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
      <main className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="text-center text-[2rem] mb-[2rem] font-[Poppins]">
          OUR SERVICES
        </div>
        <div className="flex gap-8">
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={slide.src}
                alt={slide.label}
                className="w-[300px] h-[300px] mb-4 object-cover object-center"
              />
              <div className="text-xl font-semibold text-center">{slide.label}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
