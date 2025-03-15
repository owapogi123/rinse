export default function LandingPageTwo() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,1)),url('src/assets/landing-page-bg-img.png')] bg-cover bg-center bg-fixed flex items-center justify-center text-white">
        <div className="text-center text-[white]">
          <div className="text-[5rem] font-bold drop-shadow-[0_0_10px_#ffffff]">
            We clean more than clothes
          </div>
          <div className="text-[2rem] font-mono">
            We refresh your day, your confidence, and your life.
          </div>
        </div>
      </div>
    </>
  );
}
