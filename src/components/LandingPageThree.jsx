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
    <button className="flex items-center gap-3 bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-md transition-colors duration-500 border border-indigo-600">
      <svg
        className="w-5 h-5"
        fill="currentColor"
      >
        <path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
      Check for updates
    </button>
export default UpdateButton;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
