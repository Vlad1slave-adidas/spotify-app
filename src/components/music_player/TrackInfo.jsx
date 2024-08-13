import { useSelector } from 'react-redux'
import ButtonLikeTrack from '../ui/buttons/button_like/ButtonLikeTrack'

function TrackInfo({ image, name, artists, id }) {
	const likedSongs = useSelector(state => state.likedSongs.likedSongs)
	const isExist = likedSongs.includes(id)

	return (
		<div className='flex items-center gap-4 text-left max-md:gap-2'>
			<img src={image} width={50}></img>
			<div className='max-w-64 overflow-hidden text-ellipsis whitespace-nowrap max-md:!max-w-40 max-lg:max-w-56'>
				<div className='max-md:text-sm'>{name}</div>
				{artists.map(artist => (
					<span
						className="mr-1 text-neutral-400 last:mr-0 max-md:text-sm [&:not(:last-child)]:after:content-[',']"
						key={artist.id}
					>
						{artist.name}
					</span>
				))}
			</div>
			<ButtonLikeTrack trackId={id} isExist={isExist} />
		</div>
	)
}

export default TrackInfo
