import { useEffect, useState } from "react"
import './layout.css'
export const Header = () => {
	const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'enabled');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isButton1Clicked, setIsButton1Clicked] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode);
		localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(true);
		setIsButton1Clicked(!isButton1Clicked);
	};

	const handleButton2Click = () => {
		setDarkMode(false);
		setIsButton1Clicked(!isButton1Clicked);
	};

	const handleShow = () => {
		setShow(!show);
	}

	return (
		<header className="lg:flex items-center justify-between pt-8">
			<div className="flex items-center justify-between">
				<a className="text-white text-3xl font-normal font-Angry" href="#!">LOGO</a>
				<div className="lg:hidden" onClick={handleShow}>
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" viewBox="0 0 32 22" fill="none">
						<path d="M1 1H31" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
						<path d="M1 11L31 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
						<path d="M13 21L31 21" stroke="#6E2195" strokeWidth="1.5" strokeLinecap="round" />
					</svg>
				</div>
			</div>
			<div className={`media-nav lg:flex lg:justify-between lg:items-center transition-all duration-200 ${show ? 'left-0' : 'left-[-100%]'}`}>
				<div className="lg:hidden absolute top-10 right-10" onClick={handleShow}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
						<path strokeLinecap="round" fill="white" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</div>
				<nav>
					<ul className="lg:flex items-center xl:gap-[29px] md:gap-4">
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
								href="#articles"
							>
								Статьи
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
				</nav>
				<div className="border theme-mode w-fit border-white border-solid rounded lg:flex lg:my-0 my-6 ml-[75px] mr-[45px]">
					<button
						className={`px-3 py-1.5 text-white rounded-l-sm rounded-r ${darkMode ? 'bg-pink' : 'bg-transparent'}`}
						onClick={toggleDarkMode}
					>тёмная</button>
					<button
						className={`px-3 py-1.5 rounded-r-sm rounded-l ${darkMode ? 'bg-transparent text-white' : 'bg-white text-black-pink'}`}
						onClick={handleButton2Click}
					>светлая</button>
				</div>
				<button
					className="px-4 h-[2.2rem] bg-violet-500 text-[1rem] text-white rounded border border-white "
				>Регистрация/Вход</button>
			</div>
		</header >
	)
}
