import { CgDetailsMore } from 'react-icons/cg'

function ButtonOpenSidebar({ action }) {
	return (
		<button
			className='fixed left-1 top-1 z-40 rounded-md p-1 text-2xl font-semibold text-white transition-colors duration-75 ease-linear hover:bg-white/10'
			onClick={action}
		>
			<CgDetailsMore />
		</button>
	)
}

export default ButtonOpenSidebar
