import useOpen from '../../hooks/useOpen'

function MusicMixesCard({ image, name, artists, id }) {
	const { openAlbum } = useOpen()

	return (
		<div>
			<button
				className='h-72 cursor-pointer rounded-xl bg-black_850 p-5 text-left hover:bg-black_600 active:bg-black'
				onClick={() => openAlbum(id)}
			>
				<img className='mb-4' src={image} alt='album img' width={185}></img>
				<div className='mb-1 max-w-40 overflow-hidden text-ellipsis whitespace-nowrap'>
					{name}
				</div>

				<div className='max-w-40 overflow-hidden text-ellipsis whitespace-nowrap'>
					{artists.map(artist => (
						<span
							className="mr-1 text-zinc-500 last:mr-0 [&:not(:last-child)]:after:content-[',']"
							key={artist.id}
						>
							{artist.name}
						</span>
					))}
				</div>
			</button>
		</div>
	)
}

export default MusicMixesCard
