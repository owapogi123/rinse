import { Outlet, NavLink } from "react-router";
function SignInAndSignUpLayout() {
  return (
    <>
      <NavLink to="/">
        <div className="absolute top-[1%] left-[1%] text-[white]">Back</div>
      </NavLink>
      <div className="h-screen bg-[url('/src/assets/bg.png')] bg-cover bg-center flex items-center justify-center">
        <Outlet />
      </div>
    </>
  );
}
export default SignInAndSignUpLayout;
