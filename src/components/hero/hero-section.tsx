import assets from "../../assets"
import { Header } from "../../layouts"
import './hero-section.css'

export const HeroSection = () => {
	return (
		<div className="hero-section md:pb-[265px] pb-[295px] relative z-10">
			<div className="container relative">
				<Header />
				<div className="md:pt-[95px] pt-[34px] md:mb-[95px] mb-[232px] text-white font-normal md:text-left text-center">
					<h2 className="other-font text-[50px] md:max-w-[372px] leading-[118.5%]">Накрутка зрителей на Twitch</h2>
					<p className="text-2xl leading-[118.5%] md:mt-[30px] md:mb-20 mb-[347px] mt-[30px] tracking-[1px] md:w-auto w-[309px] md:mx-0 mx-auto">Увеличим вашу аудиторию в разы!</p>
					<div className="sm:relative nakrutka-box">
						<a className="btn" href="#!">накрутить</a>
						<img className="absolute sm:z-[-1] sm:bottom-[-163px] sm:left-[-14.2%] top-[89%] right-[-177px] left-auto hero-dots" src={assets.dotsIcon} alt="dots icon" />
					</div>
				</div>
			</div>
		</div>
	)
}
