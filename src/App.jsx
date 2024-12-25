import HeroImg from "./assets/Illustration.png";
import LogoImg from "./assets/Logo.png";
import cl1 from "./assets/cl1.png";
import cl2 from "./assets/cl2.png";
import cl3 from "./assets/cl3.png";
import cl4 from "./assets/cl4.png";
import cl5 from "./assets/cl5.png";
import cl6 from "./assets/cl6.png";

function App() {
	return (
		<div className="flex flex-col font-sans text-base m-4 lg:container lg:mx-auto">
			{/* Navbar */}
			<nav className="py-4 lg:pt-[60px]">
				<div className=" mx-auto flex justify-between items-center">
					<img className="h-10 lg:h-auto" src={LogoImg} alt="" />
					<div className="hidden lg:block">
						<a href="#about" className="mx-4 hover:text-gray-400">
							About us
						</a>
						<a href="#services" className="mx-4 hover:text-gray-400">
							Services
						</a>
						<a href="#contact" className="mx-4 hover:text-gray-400">
							Use cases
						</a>
						<a href="#contact" className="mx-4 hover:text-gray-400">
							Pricing
						</a>
						<a href="#contact" className="mx-4 hover:text-gray-400">
							Blog
						</a>
						<button className="border border-black px-[35px] py-[20px] rounded-[14px]">
							Request a quote
						</button>
					</div>
					<div className="block lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-8 font-bold"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</div>
				</div>
			</nav>

			{/* Hero Content */}
			<div className="flex flex-col lg:flex-row py-4 lg:py-[70px] lg:justify-between gap-4">
				<div className="lg:max-w-2xl flex flex-col gap-4 lg:gap-[35px]">
					<h1 className="text-5xl lg:text-[60px] font-semibold">
						Navigating the digital landscape for success
					</h1>
					<p>
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social media
						marketing, and content creation.
					</p>
					<button className="px-[35px] py-[20px] bg-black text-white w-full lg:w-fit rounded-[14px]">
						Book a consultation
					</button>
				</div>
				<img className="lg:max-w-fit " src={HeroImg} alt="Hero image" />
			</div>

			{/* Footer */}
			<div className="grid grid-cols-2 lg:grid-cols-6 justify-items-center grayscale">
				<img src={cl1} alt="" className="h-auto" />
				<img src={cl2} alt="" className="h-auto" />
				<img src={cl3} alt="" className="h-auto" />
				<img src={cl4} alt="" className="h-auto" />
				<img src={cl5} alt="" className="h-auto" />
				<img src={cl6} alt="" className="h-auto" />
			</div>
		</div>
	);
}

export default App;
