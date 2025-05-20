import { NavLink } from "react-router-dom";

export default function LandingPageNav() {
  const menuItems = [
    { name: 'Services', path: '/services' },
    { name: 'Promos', path: '/promos' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact us', path: '/contact' }
  ];

  return (
    <nav className="w-full sticky top-0 z-50 flex justify-start items-center bg-[#FDFBEE] p-[1rem] shadow-3xl relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <div className="h-full w-16 border-r-2 border-dashed border-[#24444d]/20 ml-16"></div>
        <div className="h-full flex">
          <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-[#24444d]/30 to-transparent mr-8"></div>
          <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-[#24444d]/30 to-transparent"></div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[0.5rem] mr-auto relative group">
        <img 
          src="/picture.png" 
          className="w-[2.5rem] h-[2.5rem] invert transition-transform duration-300 group-hover:scale-110" 
          alt="Rinse Logo"
        />
        <div className="text-[2rem] text-[black] font-[Poppins] font-bold relative">
          RINSE
          <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#24444d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </div>

      <div className="flex gap-[1.5rem] text-[1rem] text-[#27548A] font-bold font-[Poppins] mx-8 relative">
        {menuItems.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) => 
              `relative px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer group ${
                isActive ? 'text-white bg-[#24444d]' : ''
              }`
            }
          >
            <span className="relative z-10">{name}</span>
            <div className="absolute inset-0 bg-[#24444d] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom z-0"></div>
            <div className="absolute -left-2 top-1/2 w-1.5 h-1.5 bg-[#24444d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1/2"></div>
          </NavLink>
        ))}
      </div>

      <NavLink className="ml-auto relative group" to="/sign/up" end>
        <div className="px-[3rem] py-[0.7rem] text-[#ffffff] bg-[#24444d] rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[black] shadow-lg shadow-blue-500/50 relative overflow-hidden">
          <span className="relative z-15">Sign up & reserve your spot</span>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
        </div>
      </NavLink>
    </nav>
  );
}
