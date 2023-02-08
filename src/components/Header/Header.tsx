import Image from 'next/image'

const Header = () => {
	return (
		<div className="w-full flex items-center bg-slate-600 h-24 justify-center">
			<div className="w-4/5 max-w-screen-xl item-center justify-center">
				<div className='w-48'>
					<Image
						src="/logo-no-background.svg" 
						alt={'Logo'} 
						width={500} 
						height={500} 
						className='fill-blue-500'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
