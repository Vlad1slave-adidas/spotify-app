import { useEffect, useState } from 'react'
import { IoMdVolumeHigh } from 'react-icons/io'
import { IoMdVolumeOff } from 'react-icons/io'

function VolumeControl({ audioRef }) {
	const [muteVolume, setMuteVolume] = useState(false)
	const [volume, setVolume] = useState(60)

	useEffect(() => {
		if (audioRef) {
			audioRef.current.volume = volume / 100
			audioRef.current.muted = muteVolume
		}
	}, [volume, audioRef, muteVolume])

	return (
		<div className='flex items-center gap-2'>
			<button onClick={() => setMuteVolume(prev => !prev)}>
				{muteVolume || volume < 5 ? <IoMdVolumeOff /> : <IoMdVolumeHigh />}
			</button>
			<input
				type='range'
				min={0}
				max={100}
				value={volume}
				onChange={e => setVolume(e.target.value)}
			/>
		</div>
	)
}

export default VolumeControl
