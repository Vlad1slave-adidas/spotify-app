import useOpen from '../../hooks/useOpen'

function AlbumCard({ image, artist, year, artists, id }) {
	const { openAlbum } = useOpen()

	return (
		<div>
			<button
				className='relative rounded-lg px-3 py-3 hover:bg-black_600 active:bg-black'
				onClick={() => openAlbum(id)}
			>
				<img
					src='/icons/play.png'
					className='absolute right-1 top-1/2 opacity-0'
					width={80}
				/>
				<div className='mb-3 h-[150px] w-[150px] overflow-hidden rounded-md max-lg:!h-28 max-lg:!w-28 max-xl:h-32 max-xl:w-32'>
					<img className='h-full w-full object-cover' src={image} alt='album' />
				</div>
				<div>{artist}</div>
				<div className='max-w-36 overflow-hidden text-ellipsis whitespace-nowrap max-md:max-w-28 max-lg:max-w-24'>
					<span className='mr-1'>{year}</span>
					{artists.map(artist => (
						<span className='' key={artist.id}>
							{artist.name}
						</span>
					))}
				</div>
			</button>
		</div>
	)
}

export default AlbumCard
