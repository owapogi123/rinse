import { NavLink } from "react-router";
function SignUp() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] backdrop-blur-xl p-[5rem] text-white rounded-[3rem] flex flex-col items-center gap-[2rem]">
      <div className="text-[3rem] text-[white] font-bold">SIGN UP</div>
      <div className="flex flex-col gap-[1rem]">
        <input
          type="text"
          placeholder="NAME"
          className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
        />
        <input
          type="text"
          placeholder="EMAIL"
          className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
        />
        <input
          type="password"
          placeholder="CONFIRM PASSWORD"
          className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
        />
      </div>
      <input
        className="bg-[black] text-[white] px-[3rem] py-[1rem] hover:bg-[white] hover:text-[black]"
        type="button"
        value="SIGN UP"
      />
      <NavLink to="/sign" end>
        <div className="font-mono">Already have an account?</div>
      </NavLink>
    </div>
  );
}

export default SignUp;
