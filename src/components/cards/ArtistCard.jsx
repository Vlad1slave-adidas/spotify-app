import useOpen from '../../hooks/useOpen'

function ArtistCard({ image, name, id }) {
	const { openArtistPage } = useOpen()

	return (
		<div>
			<button
				onClick={() => openArtistPage(id)}
				className='relative rounded-xl px-3 py-3 hover:bg-black_600 active:bg-black'
			>
				<img
					src='/icons/play.png'
					className='absolute right-1 top-1/2 opacity-0'
					width={80}
				/>
				<div className='mb-3 flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full max-lg:!h-28 max-lg:!w-28 max-xl:h-32 max-xl:w-32'>
					<img className='bg-cover' src={image} alt='artist' />
				</div>
				<div className='text-left'>
					<div className='font-semibold'>{name}</div>
					<div className='text-zinc-500'>Исполнитель</div>
				</div>
			</button>
		</div>
	)
}

export default ArtistCard
