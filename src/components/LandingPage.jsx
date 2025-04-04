function LandingPage() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 p-[2rem] bg-[lightyellow] w-full h-screen rounded-3xl  ">
        <div className="text-[black] text-center flex flex-col items-center justify-start mt-[30%]">
          <div className="text-[6rem] font-bold animate-bounce font-[Poppins]">
            RINSE
          </div>
          <div className="text-[2rem] text-pretty relative">
            <div className="text-[2rem] text-pretty">
              <div>
                <span className="font-ms font-[Poppins]">
                  Rinse partners with professional cleaning facilities to ensure
                  high quality laundry and dry cleaning services
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex items-center justify-center">
          <img
            className="w-full p-4 max-w-[500px] rounded-full shadow-xl "
            src="/src/assets/landing-page-img7.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
