function LandingPage() {


	return (
		<>
			<div className="flex justfy-start items-center bg-[#24444d] p-[1rem]">
				<div className="flex justify-center items-center gap-[0.5rem]">
					<img src="/icon.svg" className="w-[2.5rem] h-[2.5rem]" />
					<div className="text-[2rem] text-[white] font-bold">RINSE</div>
				</div>
				<div className="flex gap-[1rem] ml-auto">
					<button className="px-[3rem] py-[0.7rem] border border-white bg-[#000000] text-[#ffffff] rounded-md hover:bg-[white] hover:text-[black]">
						SIGN IN
					</button>
					<button className="px-[3rem] py-[0.7rem] border text-[#ffffff] bg-[#6c8994] rounded-md hover:bg-[white] hover:text-[black] ">
						GET A DEMO
					</button>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-3 p-[2rem] bg-[#031e24] w-full">
				<div className="text-white text-center flex flex-col items-center justify-start mt-[30%]">

					<div className="text-[#b0c5ce] text-[6rem] font-bold">RINSE</div>
					<div className="text-[2rem]">Rinse partners with professional cleaning facilities to ensure high-quality laundry and dry-cleaning services</div>
					<button className="border-[1px] px-[2rem] py-[1rem] bg-[#000000] text-white rounded-md hover:bg-white hover:text-black ">
						Sign up & reserve your spot
					</button>
				</div>

				<div className="col-span-2 flex items-center justify-center">
					<img className="w-full p-[2rem]" src="/src/assets/landing-page-image.png" alt="" />
				</div>
			</div >
		</>
	)
}

export default LandingPage
