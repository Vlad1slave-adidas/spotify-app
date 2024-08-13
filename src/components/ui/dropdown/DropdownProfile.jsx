import { IoMdExit } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function DropdownProfile() {
	const navigate = useNavigate()

	const handleExit = () => {
		localStorage.clear()
		navigate('/')
	}

	return (
		<div className='absolute left-0 z-10 w-28 translate-y-1 font-semibold'>
			<button
				onClick={handleExit}
				className='flex w-full items-center justify-between rounded-md bg-zinc-900 px-5 py-3 transition-colors ease-linear hover:bg-black'
			>
				<span>Logout</span>
				<IoMdExit />
			</button>
		</div>
	)
}

export default DropdownProfile
