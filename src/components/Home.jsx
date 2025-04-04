const slides = [
  { label: "Folding", src: "/src/assets/folding.png" },
  { label: "Wash & Dry", src: "/src/assets/wash.png" },
  { label: "Pressing", src: "/src/assets/pressing.png" },
  { label: "Dry Clean", src: "/src/assets/dry.png" },
];

const services = [
  { label: "FOLD", price: "P500", src: "/fold.svg" },
  { label: "WASH & DRY", price: "P700", src: "/wash-and-dry.svg" },
  { label: "PRESSING", price: "P600", src: "/pressing.svg" },
  { label: "DRY CLEAN", price: "P800", src: "/dry-clean.svg" },
];
export default function Home() {
  return (
    <>
      <main1 className="w-full h-screen flex justify-center items-center bg-[lightyellow]">
        <div>
          <div className="text-center text-[2rem] mb-[2rem]">OUR PRICES</div>
          <div className="flex justify-evenly items-center gap-[2rem] flex-wrap">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-[300px] h-[400px] bg-[lightblue] border-[3px] border-[#0d47a1] rounded flex justify-center items-center"
              >
                <div className="flex flex-col items-center">
                  <img src={service.src} className="w-[200px]" />
                  <div className="text-[2rem] mt-4 text-center">
                    {service.label}
                  </div>
                  <div className="text-lg">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main1>
      <main className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="text-center text-[2rem] mb-[2rem]">OUR SERVICES</div>
        <div className="flex gap-8">
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={slide.src}
                className="w-[300px] h-[300px] mb-4 object-cover object-center"
              />
              <div className="text-xl font-semibold text-center">
                {slide.label}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
