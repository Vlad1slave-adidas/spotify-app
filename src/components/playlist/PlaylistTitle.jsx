import Loader from '../ui/loader/Loader'

function PlaylistTitle({ data, isLoading, error }) {
	return (
		<div className='mb-7'>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error.message}</div>
			) : (
				data && (
					<div className='mb-4 flex items-center gap-8'>
						<img
							src={data.images[0].url}
							className='w-64 max-md:max-w-52'
						></img>
						<div>
							<h1 className='mb-4 text-7xl font-bold max-md:text-5xl'>
								{data.name}
							</h1>
						</div>
					</div>
				)
			)}
		</div>
	)
}

export default PlaylistTitle
