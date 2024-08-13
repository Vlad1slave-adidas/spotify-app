import useOpen from '../../hooks/useOpen'
import Loader from '../ui/loader/Loader'

function ArtistBestResultCard({ data, isLoading, error }) {
	const { openArtistPage } = useOpen()

	const id = data?.artists?.items[0]?.id
	return (
		<div>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error.message}</div>
			) : (
				data && (
					<div>
						<h3 className='mb-6 text-2xl font-bold'>Best Result</h3>
						<button
							onClick={() => openArtistPage(id)}
							className='relative rounded-xl bg-[#1c1c1c] px-8 py-7 text-left hover:bg-black_600 active:bg-black'
						>
							<img
								src='/icons/play.png'
								className='absolute right-1 top-1/2 opacity-0'
								width={80}
							/>
							<img
								className='mb-4'
								src={data?.artists?.items[0]?.images[0]?.url}
								alt='artist'
								width={330}
							/>
							<h2 className='mb-2 text-4xl font-bold'>
								{data?.artists?.items[0]?.name}
							</h2>
							<div className='text-neutral-400'>Исполнитель</div>
						</button>
					</div>
				)
			)}
		</div>
	)
}

export default ArtistBestResultCard
