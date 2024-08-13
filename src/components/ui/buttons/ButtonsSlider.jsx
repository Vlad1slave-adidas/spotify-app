import { SlArrowRight } from 'react-icons/sl'
import { SlArrowLeft } from 'react-icons/sl'

function ButtonsSlider({ goToPrevSlide, goToNextSlide }) {
	return (
		<div>
			<button
				onClick={goToPrevSlide}
				className='absolute left-0 top-1/2 -translate-x-7 hover:scale-110'
			>
				<SlArrowLeft />
			</button>
			<button
				onClick={goToNextSlide}
				className='absolute right-0 top-1/2 translate-x-7 hover:scale-110'
			>
				<SlArrowRight />
			</button>
		</div>
	)
}

export default ButtonsSlider
