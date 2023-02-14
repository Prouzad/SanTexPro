import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Navbar = () => {
	const nav = [ 
		{
			link: 'category',
			title: 'Категории' 
		},
		{
			link: 'shops',
			title: 'Магазин' 
		},
		{
			link: 'brands',
			title: 'Бренды' 
		},
		{
			link: 'aboutUs',
			title: 'О нас' 
		},
		{
			link: 'delivery',
			title: 'Доставка' 
		},
		{
			link: 'contacts',
			title: 'Контакты' 
		},
	]

	return (
		<div className='w-full flex bg-white justify-center items-center p-2 text-lg pb-4 border-y-2 border-stone-200 xl:text-sm lg:flex h-screen z-10 fixed absolute'>
			<nav className='w-4/5 max-w-screen-xl flex items-center'>
				<ul className='w-3/6 flex text-black font-medium item-center justify-between'>
					{nav.map((item, idx) => {
						return(
							<>
								<li key={idx} className='cursor-pointer hover:text-indigo-700 select-none flex items-center'>
									<Link href={`/${item.link}`} passHref legacyBehavior>
										<a className='flex items-center justify-center'>
											{item.link === 'category' ? <MenuIcon sx={{marginRight: '5px'}}/> : null}
											{item.title}
										</a>
									</Link>
								</li>
							</>
						)
					})}
				</ul>
			</nav>
		</div>
	)
}


export default Navbar
