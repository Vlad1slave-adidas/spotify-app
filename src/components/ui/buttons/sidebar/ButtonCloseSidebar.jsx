import { MdClose } from 'react-icons/md'

function ButtonCloseSidebar({ action }) {
	return (
		<button
			className='fixed left-44 top-1 z-40 p-1 text-xl font-semibold text-gray transition-colors duration-75 ease-linear hover:text-white max-md:left-40'
			onClick={action}
		>
			<MdClose />
		</button>
	)
}

export default ButtonCloseSidebar
