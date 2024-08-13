import TrackCard from '../cards/TrackCard'
import Loader from '../ui/loader/Loader'

function TracksOfPLaylist({ data, isLoading, error }) {
	return (
		<div>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error.message}</div>
			) : (
				data &&
				data.tracks.items.map(
					(item, index) =>
						item.track !== null && (
							<TrackCard
								key={item.track.id}
								image={item.track.album.images[0].url}
								trackName={item.track?.name}
								trackId={item.track?.id}
								counter={(index += 1)}
								album={item.track?.album.name}
								albumId={item.track?.album.id}
								artists={item.track?.artists}
								time={item.track?.duration_ms}
								audioURL={item.track?.preview_url}
							/>
						),
				)
			)}
		</div>
	)
}

export default TracksOfPLaylist
