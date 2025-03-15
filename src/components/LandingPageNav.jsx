import { NavLink } from "react-router";
export default function LandingPageNav() {
  return (
    <>
      <div className="sticky top-0 z-50 flex justify-start items-center bg-[#98d8ef] p-[1rem] shadow-2xl">
        <div className="flex justify-center items-center gap-[0.5rem] mr-auto">
          <img src="/icon.svg" className="w-[2.5rem] h-[2.5rem] invert" />
          <div className="text-[2rem] text-[black] font-bold">RINSE</div>
        </div>
        <div className="flex gap-[2rem] text-[1rem] text-[black]">
          <div className="hover:text-white">About us</div>
          <div className="hover:text-white">Promos</div>
          <div className="hover:text-white">Prices</div>
          <div className="hover:text-white">Branches</div>
          <div className="hover:text-white">Contact us</div>
        </div>
        <NavLink className="ml-auto" to="/sign/up" end>
          <div className="px-[3rem] py-[0.7rem] text-[#ffffff] bg-[#24444d] rounded-md hover:bg-[white] hover:text-[black]">
            Sign up & reserve your spot
          </div>
        </NavLink>
      </div>
    </>
  );
}
