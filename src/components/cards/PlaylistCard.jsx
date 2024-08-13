import useOpen from '../../hooks/useOpen'

function PlaylistCard({ image, name, id }) {
	const { openPlaylist } = useOpen()

	return (
		<div>
			<button
				className='relative cursor-pointer rounded-xl bg-black_850 p-5 text-left shadow-md hover:bg-black_600 active:bg-black'
				onClick={() => openPlaylist(id)}
			>
				<img
					src='/icons/play.png'
					className='absolute right-3 top-1/2 w-24 opacity-0'
				/>
				<img className='mb-3 w-44' src={image} alt='album img'></img>
				<div className='max-xs-sm:!max-w-20 max-w-40 overflow-hidden text-ellipsis whitespace-nowrap max-xl:max-w-28'>
					{name}
				</div>
			</button>
		</div>
	)
}

export default PlaylistCard
