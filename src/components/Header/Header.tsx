import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { TextField } from '@mui/material';
import { Input } from '@nextui-org/react'
import Image from 'next/image'

const Header = () => {
	return (
		<div className="w-full flex items-center  h-20 justify-center bg-white">
			<div className="w-4/5 max-w-screen-xl flex item-center justify-between">
				<div className='w-48 flex items-center'>
					<Image
						src="/logo-no-background.svg" 
						alt={'Logo'} 
						width={500} 
						height={500} 
						className='fill-blue-700 cursor-pointer '
					/>
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
						className='cursor-pointer'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
