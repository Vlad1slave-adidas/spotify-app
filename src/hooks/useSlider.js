import { useEffect, useState } from 'react'

function useSlider() {
	const [startIndex, setStartIndex] = useState(0)
	const [animationClass, setAnimationClass] = useState('animate-slide')

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimationClass('')
		}, 500)

		return () => clearTimeout(timer)
	}, [startIndex])

	const getVisibleItems = data => {
		const playlists = data.playlists.items.slice(startIndex, startIndex + 6)
		return playlists
	}

	const goToPrevSlide = () => {
		setAnimationClass('animate-slide')
		if (startIndex !== 0) {
			setStartIndex(startIndex - 6)
		} else {
			setStartIndex(12)
		}
	}

	const goToNextSlide = () => {
		setAnimationClass('animate-slide')
		if (startIndex !== 12) {
			setStartIndex(startIndex + 6)
		} else {
			setStartIndex(0)
		}
	}

	return {
		startIndex,
		animationClass,
		getVisibleItems,
		goToPrevSlide,
		goToNextSlide,
	}
}

export default useSlider
