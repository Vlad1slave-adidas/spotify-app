import { LuShuffle } from 'react-icons/lu'
import { MdSkipPrevious } from 'react-icons/md'
import { MdSkipNext } from 'react-icons/md'
import { FaCirclePlay } from 'react-icons/fa6'
import { FaCirclePause } from 'react-icons/fa6'
import { LuRepeat } from 'react-icons/lu'
import { useCallback, useEffect, useRef, useState } from 'react'
import useActions from '../../hooks/useActions'
import { useSelector } from 'react-redux'

function PlaybackControls({ audioRef, audioURL, progressBarRef }) {
	const duration = useSelector(state => state.progressBar.duration)
	const tracksHistory = useSelector(state => state.audio.tracksHistory)

	const { prevTrack, nextTrack, setTimeProgress, shuffleTracksHistory } =
		useActions()

	const [isShuffle, setIsShuffle] = useState(false)
	const [isPlay, setIsPlay] = useState(false)
	const [isRepeat, setIsRepeat] = useState(false)

	const playAnimationRef = useRef()

	const repeat = useCallback(() => {
		if (audioRef.current) {
			const currentTime = audioRef.current.currentTime
			setTimeProgress(currentTime)
			progressBarRef.current.value = currentTime
			progressBarRef.current.style.setProperty(
				'--range-progress',
				`${(progressBarRef.current.value / duration) * 100}%`,
			)

			playAnimationRef.current = requestAnimationFrame(repeat)
		}
	}, [audioRef, duration, progressBarRef, setTimeProgress])

	useEffect(() => {
		setIsPlay(true)
	}, [audioURL])

	useEffect(() => {
		if (isPlay) {
			audioRef.current.play()
			playAnimationRef.current = requestAnimationFrame(repeat)
		} else {
			audioRef.current.pause()
			cancelAnimationFrame(playAnimationRef.current)
		}
	}, [isPlay, audioRef, repeat])

	//Repeat tracks
	useEffect(() => {
		if (isRepeat) {
			audioRef.current.loop = true
		} else {
			audioRef.current.loop = false
		}
	}, [isRepeat, audioRef])

	//Shuffle tracks
	useEffect(() => {
		if (isShuffle && tracksHistory.length) {
			shuffleTracksHistory()
		}
	}, [isShuffle, audioRef, tracksHistory.length])

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.addEventListener('ended', handleNextTrack)
		}

		return () => {
			if (audioRef.current) {
				audioRef.current.removeEventListener('ended', handleNextTrack)
			}
		}
	}, [audioRef, nextTrack])

	const handleTogglePlay = () => {
		setIsPlay(!isPlay)
	}

	const handleToggleShuffle = () => {
		setIsShuffle(!isShuffle)
	}

	const handleToggleRepeat = () => {
		setIsRepeat(!isRepeat)
	}

	const handlePrevTrack = () => {
		prevTrack()
	}

	const handleNextTrack = () => {
		nextTrack()
	}

	return (
		<div className='flex items-center gap-3'>
			<button onClick={handleToggleShuffle} className='text-lg'>
				<LuShuffle className={isShuffle ? 'text-white' : 'text-zinc-500'} />
			</button>
			<button onClick={handlePrevTrack} className='text-3xl'>
				<MdSkipPrevious />
			</button>
			<button onClick={handleTogglePlay} className='text-4xl'>
				{isPlay ? <FaCirclePause /> : <FaCirclePlay />}
			</button>
			<button onClick={handleNextTrack} className='text-3xl'>
				<MdSkipNext />
			</button>
			<button onClick={handleToggleRepeat} className='text-lg'>
				<LuRepeat className={isRepeat ? 'text-white' : 'text-zinc-500'} />
			</button>
		</div>
	)
}

export default PlaybackControls
