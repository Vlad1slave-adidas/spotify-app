import { IoIosTimer } from 'react-icons/io'

function TracksHeader() {
	return (
		<header className='mb-2 grid w-full border-b px-6 py-2 text-sm font-semibold text-neutral-400 [grid-template-columns:_1fr_20fr_20fr_3fr] max-md:px-0 max-md:[grid-template-columns:_1fr_20fr_15fr_3fr]'>
			<div>#</div>
			<div>TITLE</div>
			<div className='max-sm:hidden'>ALBUM</div>
			<div className='min-sm:hidden'></div>
			<IoIosTimer className='text-xl' />
		</header>
	)
}

export default TracksHeader
