import useOpen from '../../hooks/useOpen'

function PlaylistSliderCard({ image, playlistName, id }) {
	const { openPlaylist } = useOpen()

	return (
		<button
			className='flex items-center gap-6 rounded-lg bg-white/10 transition-colors duration-200 ease-in-out hover:bg-white/15 active:bg-white/10 max-xs:flex-col max-xs:justify-center'
			onClick={() => openPlaylist(id)}
		>
			<img className='rounded-l-lg' src={image} alt='playlist' width={90}></img>
			<span className='text-lg font-bold'>{playlistName}</span>
		</button>
	)
}

export default PlaylistSliderCard
