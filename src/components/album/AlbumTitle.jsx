import Loader from '../ui/loader/Loader'

function AlbumTitle({ data, isLoading, error }) {
	return (
		<div className='mb-7'>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error.message}</div>
			) : (
				data && (
					<div className='mb-4 flex items-center gap-8'>
						<img src={data.images[1].url} width={250}></img>
						<div>
							<h1 className='mb-4 text-7xl font-bold'>{data.name}</h1>
							{data.artists.map(artist => (
								<div className='text-lg' key={artist.id}>
									{artist.name}
								</div>
							))}
						</div>
					</div>
				)
			)}
		</div>
	)
}

export default AlbumTitle
