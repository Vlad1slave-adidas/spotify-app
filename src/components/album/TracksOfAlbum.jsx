import TrackCard from '../cards/TrackCard'
import Loader from '../ui/loader/Loader'

function TracksOfAlbum({ data, isLoading, error }) {
	const image = data?.images[0].url

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error.message}</div>
			) : (
				data &&
				data.tracks.items.map((track, index) => (
					<TrackCard
						key={track.id}
						image={image}
						trackName={track.name}
						trackId={track.id}
						album={data.name}
						albumId={data.id}
						time={track.duration_ms}
						counter={(index += 1)}
						artists={track.artists}
						audioURL={track.preview_url}
					/>
				))
			)}
		</div>
	)
}

export default TracksOfAlbum
