import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Navbar from '../Navbar/Navbar';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
	return (
		<>
			<div className="w-full flex items-center  h-20 justify-center bg-white lg:z-20">
				<div className="w-4/5 max-w-screen-xl flex item-center justify-between">
					<div className='w-48 flex items-center cursor-pointer'>
							<div className="cursor-pointer" onClick={()=> console.log('sad')}>
								<MenuIcon className='hidden lg:flex m-2'/>
							</div>
						<h1 className='text-3xl text-indigo-800 font-bold lg:text-xl'>SanTechPro</h1>
					</div>
					<div className='w-2/5 flex items-center'>
						<input 
							type="text"
							placeholder='Search'
							className='border-2 border-indigo-500  focus:outline-indigo-700 w-full p-5 h-10 rounded' />
					</div>
					<div className='flex items-center'>
						<ShoppingBasketOutlinedIcon
							sx={{color: 'rgb(99 102 241)', fontSize: '45px'}} 
							className='cursor-pointer lg:text-4xl'
						/>
					</div>
				</div>
			</div>
			<Navbar/>
		</>
	)
}

export default Header
