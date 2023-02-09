import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
	const nav = ['Магазин', 'Бренды', 'О нас', 'Доставка', 'Контакты']

	return (
		<div className='w-full flex bg-white justify-center items-center p-2 text-lg pb-4 border-y-2 border-stone-200'>
			<div className='w-4/5 max-w-screen-xl '>
				<ul className='w-3/6 flex text-black font-medium item-center justify-between'>
					<li className='flex items-center cursor-pointer hover:text-indigo-700'>
						<MenuIcon/>
						Категории
					</li>
					{nav.map((item, idx) => {
						return(
							<>
								<li key={idx} className='cursor-pointer hover:text-indigo-700'>
									{item}
								</li>
							</>
						)
					})}
				</ul>
			</div>
		</div>
	)
}


export default Navbar
