import { BiLoaderAlt } from 'react-icons/bi'

function Loader() {
	return (
		<div className='flex min-h-screen items-center justify-center'>
			<BiLoaderAlt className='animate-spin text-2xl' />
		</div>
	)
}

export default Loader
