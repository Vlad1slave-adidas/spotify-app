import Loader from '../ui/loader/Loader'
import TrackCard from '../cards/TrackCard'
import { useState } from 'react'
import TracksHeader from '../../layouts/TracksHeader'

function PopularArtistsTracks({ isLoading, error, data }) {
	const [isShowAll, setIsShowAll] = useState(false)

	const handleToggleShowAll = () => {
		setIsShowAll(!isShowAll)
	}

	const tracksToDisplay = isShowAll ? data?.tracks : data?.tracks.slice(0, 5)

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error.message}</div>
			) : (
				data && (
					<div>
						<h3 className='mb-5 text-3xl font-bold'>Popular tracks</h3>
						<TracksHeader />
						<div className='mb-3'>
							{tracksToDisplay.map((track, index) => (
								<TrackCard
									key={track.id}
									image={track?.album?.images[0].url}
									trackName={track.name}
									trackId={track.id}
									album={track.album.name}
									albumId={track.album.id}
									time={track.duration_ms}
									counter={(index += 1)}
									artists={track.artists}
									audioURL={track.preview_url}
								/>
							))}
						</div>
						<button
							onClick={handleToggleShowAll}
							className='mb-4 font-semibold text-neutral-400 transition-colors duration-75 ease-linear hover:text-white'
						>
							{isShowAll ? 'Show less' : 'Show more'}
						</button>
					</div>
				)
			)}
		</div>
	)
}

export default PopularArtistsTracks
