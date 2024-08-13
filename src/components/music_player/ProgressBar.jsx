import { useSelector } from 'react-redux'
import '../.././index.css'
import formatTime from '../../utils/formatTime'
import useActions from '../../hooks/useActions'

function ProgressBar({ audioURL, audioRef, progressBarRef }) {
	const duration = useSelector(state => state.progressBar.duration)
	const timeProgress = useSelector(state => state.progressBar.timeProgress)

	const { setDuration } = useActions()

	const handleProgressChange = () => {
		audioRef.current.currentTime = progressBarRef.current.value
	}

	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration
		setDuration(seconds)
		progressBarRef.current.max = seconds
	}

	return (
		<>
			<audio
				src={audioURL}
				ref={audioRef}
				autoPlay
				onLoadedMetadata={onLoadedMetadata}
			/>

			<div className='flex items-center gap-3'>
				<div className='text-sm font-medium text-zinc-500'>
					{formatTime(timeProgress)}
				</div>
				<input
					className='w-96 max-md:!max-w-60 max-lg:max-w-72'
					ref={progressBarRef}
					type='range'
					defaultValue='0'
					onChange={handleProgressChange}
				/>
				<div className='text-sm font-medium text-zinc-500'>
					{formatTime(duration)}
				</div>
			</div>
		</>
	)
}

export default ProgressBar
