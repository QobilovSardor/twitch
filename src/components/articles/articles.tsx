import './articles.css';
export const Articles = () => {
	return (
		<div className="articles mt-[-168px]" id="articles">
			<div className="container">
				<h2 className="title-text sm:mt-0 mt-[88px]">статьи</h2>

				<div className="articles-boxes flex flex-wrap gap-[43px] mt-[60px]">

					<div className='relative sm:h-[413px] h-[628px] small-lg:w-[657px] w-[100%] bg-black-pink pink-card rounded-[6rem]'>
						<div className="relative advantage-box__two font-normal pl-12 pr-[52px] pt-[36px] pb-[38px] w-[100%] h-full text-gray rounded-br-[12rem] rounded-[0.75rem] bg-white">
							<h4 className='text-xl leading-[230%] font-2MASS-J1808'>Безопасность</h4>
							<p className="text-xl mt-[26px] leading-[170%]">
								Наши зрители идентичны настоящим и соблюдают правила использования площадки Twitch, что гарантирует вам полную безопасность Наши зрители идентичны настоящим и соблюдают правила использования площадки Twitch, что гарантирует вам полную безопасность
							</p>
							<a className="text-pink w-fit border-b text-xl border-pink border-solid mt-[32px]" href="#!">Подробнее</a>
						</div>
					</div>

					<div className='relative sm:h-[413px] h-[628px] bg-black-pink pink-card rounded-[6rem] small-lg:w-[460px]'>
						<div className="relative h-full flex flex-col justify-between advantage-box__two font-normal pl-12 pr-[45px] pt-[36px] pb-[38px] w-[100%] text-gray rounded-br-[12rem] rounded-[0.75rem] bg-white">
							<h4 className='text-xl leading-[230%] font-2MASS-J1808'>Безопасность</h4>
							<p className="text-xl leading-[170%]">
								Наши зрители идентичны настоящим и соблюдают правила использования площадки Twitch, что гарантирует вам полную безопасность Наши зрители идентичны настоящим и соблюдают
							</p>
							<a className="text-pink w-fit border-b text-xl border-pink border-solid mt-[39px]" href="#!">Подробнее</a>

						</div>
					</div>

					<div className='relative sm:h-[413px] h-[628px] bg-black-pink pink-card rounded-[6rem] small-lg:w-[460px]'>
						<div className="relative h-full advantage-box__two font-normal pl-12 pr-[45px] pt-[36px] pb-[36px] w-[100%] text-gray flex flex-col justify-between rounded-br-[12rem] rounded-[0.75rem] bg-white">
							<h4 className='text-xl leading-[230%] font-2MASS-J1808'>Безопасность</h4>
							<p className="text-xl leading-[170%]">
								Наши зрители идентичны настоящим и соблюдают правила использования площадки Twitch, что гарантирует вам полную безопасность Наши зрители идентичны настоящим и соблюдают
							</p>
							<a className="text-pink w-fit border-b text-xl border-pink border-solid mt-[39px]" href="#!">Подробнее</a>
						</div>
					</div>

					<div className='relative  bg-black-pink pink-card rounded-[6rem] small-lg:w-[657px] w-[100%]'>
						<div className="relative h-full advantage-box__two font-normal pl-12 pr-[52px] pt-[36px] pb-[38px] w-[100%] text-gray rounded-br-[12rem] rounded-[0.75rem] bg-white">
							<h4 className='text-xl leading-[230%] font-2MASS-J1808'>Безопасность</h4>
							<p className="text-xl mt-[26px] leading-[170%]">
								Наши зрители идентичны настоящим и соблюдают правила использования площадки Twitch, что гарантирует вам полную безопасность Наши зрители идентичны настоящим и соблюдают правила использования площадки Twitch, что гарантирует вам полную безопасность
							</p>
							<a className="text-pink w-fit border-b text-xl border-pink border-solid mt-[39px]" href="#!">Подробнее</a>
						</div>
					</div>
				</div>

				<div className="text-center">
					<a className="text-pink hidden sm:inline-block mt-[88px] tracking-[4.3px] leading-[19px] border-b border-pink border-solid font-[2MASS J1808] text-xl uppercase" href="#!">Смотреть больше статей</a>
				</div>
			</div>
		</div>
	)
}
