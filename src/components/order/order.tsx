import './order.css';
export const Order = () => {
	return (
		<div className="order sm:mt-[45px] sm:pt-[60px] pt-[73px]" id="order">
			<div className="container">
				<div className="pink-box small-lg:bg-pink rounded-[0.7rem] md:rounded-[6rem]">
					<div className="form-box relative small-lg:bg-black-pink w-full rounded-br-[5rem] small-lg:pl-[60px] small-lg:pt-[77px] small-lg:pb-[84px] small-lg:pr-[99px] rounded-[0.75rem] md:rounded-br-[15rem] ">
						<h3 className="relative text-2xl small-lg:mb-[54px] mb-[76px] small-lg:text-white text-gray font-2MASS-J1808 uppercase dark-text ">Введите свои контактные данные и мы с Вами свяжемся</h3>
						<form className="small-lg:bg-transparent bg-black-pink flex small-lg:flex-row flex-col small-lg:gap-[80px] gap-11 small-lg:items-end items-start pt-[60px] pb-[94px] pl-[30px] pr-[30px] small-lg:p-0 rounded-[15px]">
							<div className="small-lg:w-[560px] w-full">
								<div className="flex sm:gap-[40px] gap-8 sm:flex-row flex-col">
									<input className="dark-input rounded-md w-full py-[14px] sm:pl-[27px] pl-[32px]" type="text" name="name" placeholder="Введите имя" />
									<input className="dark-input rounded-md w-full py-[14px] sm:pl-[27px] pl-[32px]" type="email" name="email" placeholder="Введите почту" />
								</div>
								<textarea className="dark-input rounded-md pt-[14px] sm:pl-[27px] pl-[32px] mt-[28px] h-[166px] w-full resize-none" placeholder="Введите текст"></textarea>
							</div>
							<input type="submit" value='Отправить' className="btn small-lg:mb-[44px] cursor-pointer sm:w-fit w-full" />
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
