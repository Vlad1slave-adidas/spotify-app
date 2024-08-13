import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

function ButtonPagination({ page }) {
	const navigate = useNavigate()

	const goBack = () => {
		navigate(-1)
	}

	const goForward = () => {
		navigate(1)
	}
	return (
		<div className='flex gap-3 text-3xl'>
			<button
				onClick={goBack}
				className='transition-transform duration-200 ease-in-out hover:scale-110'
			>
				{page === 'library' ? (
					<SlArrowLeft className='text-xl' />
				) : (
					<FaArrowAltCircleLeft />
				)}
			</button>
			<button
				onClick={goForward}
				className='transition-transform duration-200 ease-in-out hover:scale-110'
			>
				{page === 'library' ? (
					<SlArrowRight className='text-xl' />
				) : (
					<FaArrowAltCircleRight />
				)}
			</button>
		</div>
	)
}

export default ButtonPagination
