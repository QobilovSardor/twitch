import './layout.css';

export const Footer = () => {
	return (
		<footer>
			<div className="container">
				<a className="text-white text-3xl font-Angry font-normal sm:mb-[35px] mb-[33px] sm:mt-[50px]" href="#!">LOGO</a>
				<ul className="sm:flex items-center gap-[41px] justify-center sm:space-y-0 space-y-[11px]">
					<li>
						<a
							className="text-white text-lg font-normal leading-10"
							href="#servise"
						>
							О сервисе
						</a>
					</li>
					<li>
						<a
							className="text-white text-lg font-normal leading-10"
							href="#advantages"
						>
							Преимущества
						</a>
					</li>
					<li>
						<a
							className="text-white text-lg font-normal leading-10"
							href="#price"
						>
							Тарифы
						</a>
					</li>
					<li>
						<a
							className="text-white text-lg font-normal leading-10"
							href="#order"
						>
							Заказать
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}
