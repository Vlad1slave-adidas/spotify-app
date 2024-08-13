import TrackCard from '../cards/TrackCard'

function TracksOfLikedSongs({ data }) {
	return (
		<div>
			{data &&
				data.items.map((item, index) => (
					<TrackCard
						key={item.track.id}
						image={item.track.album.images[0].url}
						trackName={item.track.name}
						trackId={item.track.id}
						album={item.track.album.name}
						albumId={item.track.album.id}
						time={item.track.duration_ms}
						counter={(index += 1)}
						artists={item.track.artists}
						audioURL={item.track.preview_url}
					/>
				))}
		</div>
	)
}

export default TracksOfLikedSongs
