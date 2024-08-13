import useActions from '../../hooks/useActions'
import formatTime from '../../utils/formatTime'
import ButtonLikeTrack from '../ui/buttons/button_like/ButtonLikeTrack'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'

function TrackCard({
	image,
	trackName,
	trackId,
	artists,
	counter,
	album,
	albumId,
	time,
	audioURL,
}) {
	const { setTracksHistory } = useActions()

	const durationTrack = formatTime(time / 1000)

	const trackData = {
		id: trackId,
		audioURL: audioURL,
		imageURL: image,
		name: trackName,
		artists: artists,
	}

	const handlePushToTracksHistory = useCallback(
		e => {
			if (e.target.tagName !== 'A' && e.target.tagName !== 'path') {
				setTracksHistory(trackData)
			}
		},
		[trackData],
	)

	return (
		<div
			onClick={handlePushToTracksHistory}
			className='grid w-full cursor-pointer items-center px-6 py-2 text-left [grid-template-columns:_1fr_20fr_20fr_3fr] hover:bg-neutral-900 max-md:px-0 max-md:[grid-template-columns:_1fr_20fr_15fr_3fr]'
		>
			<div>{counter}</div>
			<div className='flex justify-start gap-4'>
				<img src={image} width={50}></img>
				<div className='max-w-72 overflow-hidden text-ellipsis whitespace-nowrap max-md:max-w-60'>
					<div>{trackName}</div>
					{artists.map(artist => (
						<Link
							to={`/artist/${artist.id}`}
							className="mr-1 text-neutral-400 last:mr-0 hover:underline [&:not(:last-child)]:after:content-[',']"
							key={artist.id}
						>
							{artist.name}
						</Link>
					))}
				</div>
			</div>

			<div className='flex justify-between pr-10 max-sm:justify-end max-md:pr-5'>
				<Link
					to={`/album/${albumId}`}
					className='text-neutral-400 hover:underline max-sm:hidden'
				>
					{album}
				</Link>
				{<ButtonLikeTrack trackId={trackId} />}
			</div>

			<div>{durationTrack}</div>
		</div>
	)
}

export default TrackCard
