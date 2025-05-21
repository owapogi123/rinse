function LandingPage() {
  return (
    <>
      <div className="relative grid grid-cols-3 gap-3 p-[2rem] bg-[white] w-full h-screen rounded-3xl overflow-hidden">
        <div className="absolute top-0 left-1/4 h-full w-0.5 bg-gradient-to-b from-transparent via-black to-transparent opacity-30"></div>
        <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-black to-transparent opacity-30"></div>
        <div className="absolute top-0 left-3/4 h-full w-0.5 bg-gradient-to-b from-transparent via-black to-transparent opacity-30"></div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-[150%] h-0.5 bg-black opacity-20 transform rotate-12 origin-left"></div>
          <div className="absolute top-1/3 left-0 w-[150%] h-0.5 bg-black opacity-20 transform rotate-6 origin-left"></div>
        </div>

        <div className="text-[black] text-center flex flex-col items-center justify-start mt-[30%] relative z-10">
          <div className="text-[6rem] font-bold animate-bounce font-[Poppins]">
            RINSE
          </div>
          <div className="text-[2rem] text-pretty relative">
            <div className="text-[2rem] text-pretty">
              <div>
                <span className="font-ms font-[Poppins]">
                  partners with professional cleaning facilities to ensure high
                  quality laundry and dry cleaning services
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex items-center justify-center relative z-10">
          <div className="relative">
            <img
              className="w-full p-4 max-w-[500px] rounded-full shadow-xl -skew-y-6 size-150 transform-3d -translate-8"
              src="/src/assets/landing-page-img7.jpg"
              alt="Laundry service"
            />

            <div className="absolute top-1/4 -left-20 w-20 h-0.5 bg-black opacity-30"></div>
            <div className="absolute top-1/2 -left-20 w-20 h-0.5 bg-black opacity-30"></div>
            <div className="absolute top-3/4 -left-20 w-20 h-0.5 bg-black opacity-30"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
