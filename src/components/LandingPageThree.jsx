export default function LandingPageThree() {
  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,1)),] bg-[#c0e3f1] bg-center bg-fixed flex items-center justify-center text-white w-full h-screen overflow-hidden">
      <div className="grid grid-cols-3 grid-rows-2 gap-8 w-[80%]">
        <div className="row-span-2 col-span-2 flex flex-col">
          <div className="bg-blue-100 p-12 flex-1">
            <h1 className="text-6xl font-bold mb-6 text-gray-800">
              EFFORTLESS LAUNDRY. EVERYDAY FRESHNESS.
            </h1>
            <p className="text-xl text-[#1662c0] font-[Poppins] font-semibold">
              We provide essential services that make everyday life easier for
              you. We offer efficient cleaning, drying, and folding of clothes.
            </p>
          </div>
          <div className="bg-white p-8">
            <img
              src="/src/assets/landing-page-icons.png"
              alt="Service icons"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="row-span-2 p-8 bg-white flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <div className="bg-red-100 overflow-hidden rounded-lg">
              <img
                src="/src/assets/landing-page-img-3.png"
                alt="Laundry service"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="bg-blue-100 overflow-hidden rounded-xl">
              <img
                src="/src/assets/landing-page-img-4.png"
                alt="Happy customers"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <button className="mt-8 flex items-center justify-center gap-3 bg-white-600 hover:bg-white-700 text-black px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
            <span className="text-lg font-semibold">Check for Updates</span>
          </button>
        </div>
      </div>
    </div>
  );
}
