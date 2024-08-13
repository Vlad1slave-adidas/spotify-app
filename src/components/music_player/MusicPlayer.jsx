import { useSelector } from 'react-redux'
import TrackInfo from './TrackInfo'
import PlaybackControls from './PlaybackControls'
import ProgressBar from './ProgressBar'
import { useRef } from 'react'
import VolumeControl from './VolumeControl'

function MusicPlayer() {
	const currentTrack = useSelector(state => state.audio.currentTrack)

	const audioRef = useRef()
	const progressBarRef = useRef()

	return (
		<>
			{currentTrack && currentTrack.audioURL && (
				<div className='fixed bottom-0 z-20 flex min-h-20 w-full items-center justify-between bg-neutral-950 p-4 max-sm:[&>*:nth-child(odd)]:hidden'>
					<TrackInfo
						id={currentTrack.id}
						image={currentTrack.imageURL}
						name={currentTrack.name}
						artists={currentTrack.artists}
					/>
					<div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1'>
						<PlaybackControls
							audioRef={audioRef}
							audioURL={currentTrack.audioURL}
							progressBarRef={progressBarRef}
						/>
						<ProgressBar
							audioURL={currentTrack.audioURL}
							audioRef={audioRef}
							progressBarRef={progressBarRef}
						/>
					</div>

					<VolumeControl audioRef={audioRef} />
				</div>
			)}
		</>
	)
}

export default MusicPlayer
