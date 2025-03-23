export default function LandingPageThree() {
  return (
    <>
      <div className=" bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,1)),url('src/assets/landing-page-bg-img-2.png')] bg-cover bg-center bg-fixed flex items-center justify-center text-white w-full h-screen overflow-hidden">
        <div className="grid grid-cols-3 grid-rows-2 gap-[2rem] w-[80%]">
          <div className="grid row-span-2 col-span-2 bg-amber-300">
            <div className="bg-[lightblue]">
              <div className="p-[3rem] text-[4rem] ">
                the people’s first choice in dry cleaning
                <div className="text-[1.5rem]">
                  A laundry business provides essential services that make
                  everyday life easier for its customers. By offering efficient
                  cleaning, drying, and folding of clothes
                </div>
              </div>
            </div>
            <div className="bg-white p-[2rem]">
              <img src="/src/assets/landing-page-icons.png" alt="" />
            </div>
          </div>
          <div className="grid row-span-2 p-[2rem] bg-white place-content-center">
            <div className="flex flex-col gap-[2rem]">
              <div className="bg-[red]">
                <img src="/src/assets/landing-page-img-3.png" alt="" />
              </div>
              <div className="bg-[blue]">
                <img src="/src/assets/landing-page-img-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
