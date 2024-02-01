import assets from "../../assets";
import './servise.css';
export const Servise = () => (
	<div className="service mt-[-40px] z-40 relative flex small-lg:flex-row flex-col mb-40 w-[1440px] mx-auto" id="servise">
		<div className="relative small-lg:-order-1 order-2">
			<img className="operator-img max-w-[600px]" src={assets.operator} alt="operator img" />
			<img className="dots-img absolute left-[67%] bottom-[-48px]" src={assets.dotsIcon} alt="dots" />
		</div>
		<div className="container flex justify-between mx-0 text-gray font-normal">
			<div className="service-content max-w-[576px] ml-[99px] mt-5">
				<h3 className="text-[57px] font-2MASS-J1808 uppercase leading-[100%] mb-[48px] light">О сервисе</h3>
				<p className="text-lg leading-[40px] light ml-[13px]">Каковы преимущества работы с нами? Предлагаем уникальные возможности для значительного увеличения аудитории вашего канала на Twitch. Наш личный кабинет поможет вам привлечь больше зрителей, увеличить количество просмотров и получить новых подписчиков.</p>
				<p className="mt-[45px] leading-[41px] ml-[13px] light">Мы гарантируем безопасность. Наш подход основан на  соблюдении политики безопасности и правил платформы. Мы не требуем ваш пароль или другие личные данные, что гарантирует полную конфиденциальность. Наша репутация подкреплена тысячами довольных клиентов, которые уже воспользовались нашими услугами и успешно развивают свои каналы на Twitch.</p>
			</div>
		</div>
	</div>
)
