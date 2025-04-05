// import { Outlet, NavLink } from "react-router-dom";

// function SignInAndSignUpLayout() {
//   return (
//     <div className="relative h-screen">
//       {/* Clickable Back Button */}
//       <NavLink 
//         to="/" 
//         className="absolute top-[1%] left-[1%] z-10 text-white hover:text-indigo-200 transition-colors"
//       >
//         ← Back
//       </NavLink>

//       {/* Background with gradient mask */}
//       <div className="relative h-full w-full">
//         <div
//           className="absolute inset-0 bg-[url('/src/assets/signup-bg.jpg')] bg-cover bg-center"
//           style={{
//             maskImage: 'linear-gradient(to bottom, black 50%, transparent 90%)',
//             WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 90%)'
//           }}
//         />
        
//         {/* Content area - fixed the Outlet component name (capital O) */}
//         <div className="relative z-10 h-full flex items-center justify-center">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignInAndSignUpLayout;


import { Outlet, NavLink } from "react-router";
function SignInAndSignUpLayout() {
  return (
    <>
      <NavLink to="/">
        <div className="absolute top-[1%] left-[1%] text-[white]"> ← Back</div>
      </NavLink>
      <div className="h-screen bg-[url('/src/assets/signup-bg.jpg')] bg-cover bg-center flex items-center justify-center">
           <Outlet/>
      </div>
    </>
  );
}
export default SignInAndSignUpLayout;