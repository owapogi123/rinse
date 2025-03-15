function LandingPage() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 p-[2rem] bg-[lightyellow] w-full h-screen">
        <div className="text-[black] text-center flex flex-col items-center justify-start mt-[30%]">
          <div className="text-[6rem] font-bold">RINSE</div>
          <div className="text-[2rem]">
            Rinse partners with professional cleaning facilities to ensure
            high-quality laundry and dry-cleaning services
          </div>
        </div>

        <div className="col-span-2 flex items-center justify-center">
          <img
            className="w-full p-[1rem]"
            src="/src/assets/landing-page-img.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
