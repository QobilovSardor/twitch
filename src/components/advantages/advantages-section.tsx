import assets from '../../assets';
import './advantages-section.css';
export const AdvantagesSection = () => (
	<div className="relative max-w-[1440px] mx-auto" id='advantages'>
		<div className='dots absolute md:top-[47%] top-[20%] md:z-0 z-10 md:left-0 left-[-20%]'>
			<img src={assets.dotsIcon} alt="dots icon" />
		</div>
		<div className="container">
			<h2 className="title-text">Преимущества</h2>

			<div className="advantages-boxes md:mt-[80px] mt-[57px]">
				<div className='relative advantage-box bg-[#9146FF] rounded-[6rem] w-full'>
					<div className="relative space-y-[17px] font-normal px-12 pt-11 pb-[67px] w-full text-[#F2F2F2] rounded-br-[12rem] rounded-[0.75rem] bg-black-pink">
						<h4 className='text-xl md:leading-[230%] leading-[147.5%] font-heavy'>Соответствие</h4>
						<p className="text-xl">
							100% соответствие реальным зрителям. Наши зрители просматривают рекламу, участвуют в голосованиях, прогнозах
							и рейдах, пишут в чат и подписываются на каналы
						</p>
					</div>
				</div>

				<div className='relative md:z-0 z-20 bg-black-pink blue-card rounded-[6rem] w-full'>
					<div className="relative h-full advantage-box__two space-y-[17px] font-normal px-12 pt-11 pb-[67px] w-full text-gray rounded-br-[12rem] rounded-[0.75rem] bg-white">
						<h4 className='text-xl md:leading-[230%] leading-[147.5%] font-heavy'>Безопасность</h4>
						<p className="text-xl">
							Наши зрители идентичны настоящим и соблюдают правила использования площадки Twitch, что гарантирует вам полную безопасность
						</p>
					</div>
				</div>

				<div className='relative  bg-black-pink blue-card rounded-[6rem] w-full'>
					<div className="relative h-full advantage-box__two space-y-[17px] font-normal px-12 pt-11 pb-[67px] w-full text-gray rounded-br-[12rem] rounded-[0.75rem] bg-white">
						<h4 className='text-xl md:leading-[230%] leading-[147.5%] font-heavy'>Эффективность</h4>
						<p className="text-xl">
							Наша уникальная технология не имеет аналогов во всем мире и уже доказала свою эффективность в работе с популярными стримерами
						</p>
					</div>
				</div>

				<div className='relative  bg-black-pink blue-card rounded-[6rem] w-full'>
					<div className="relative h-full advantage-box__two space-y-[17px] font-normal px-12 pt-11 pb-[67px] w-full text-gray rounded-br-[12rem] rounded-[0.75rem] bg-white">
						<h4 className='text-xl md:leading-[230%] leading-[147.5%] font-heavy'>Анонимность</h4>
						<p className="text-xl">
							Мы не передаем данные наших клиентов третим лицам
						</p>
					</div>
				</div>

				<div className='relative  bg-black-pink blue-card rounded-[6rem] w-full'>
					<div className="relative h-full advantage-box__two space-y-[17px] font-normal px-12 pt-11 pb-[67px] w-full text-gray rounded-br-[12rem] rounded-[0.75rem] bg-white">
						<h4 className='text-xl md:leading-[230%] leading-[147.5%] font-heavy'>Индивидуальный подход</h4>
						<p className="text-xl">
							Мы подходим индивидуально к каждому клиенту, даем рекомендации по развитию канала и легко дорабатываем недостающий функционал
						</p>
					</div>
				</div>

				<div className='relative  bg-black-pink blue-card rounded-[6rem] w-full'>
					<div className="relative h-full advantage-box__two space-y-[17px] font-normal px-12 pt-11 pb-[67px] w-full text-gray rounded-br-[12rem] rounded-[0.75rem] bg-white">
						<h4 className='text-xl md:leading-[230%] leading-[147.5%] font-heavy'>Техническая поддержка</h4>
						<p className="text-xl">
							Наша поддержка всегда на связи и готова оказать помощь в любое время суток
						</p>
					</div>
				</div>

			</div>
		</div>
	</div>
)