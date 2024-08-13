import { useGetUsersSavedAlbumsQuery } from '../../services/libraryApi'
import AlbumCardForSection from '../cards/AlbumCardForSection'
import Loader from '../ui/loader/Loader'

function AlbumSection() {
	const { isLoading, error, data } = useGetUsersSavedAlbumsQuery()

	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error.message}</div>
			) : (
				data && (
					<div className='w-full px-10 pb-24 pt-5'>
						<h2 className='mb-6 text-4xl font-bold'>Playlists</h2>
						<div className='flex flex-wrap justify-between gap-6'>
							{data.items.map(item => (
								<AlbumCardForSection
									key={item.album.id}
									image={item.album.images[0].url}
									name={item.album.name}
									id={item.album.id}
								/>
							))}
						</div>
					</div>
				)
			)}
		</>
	)
}

export default AlbumSection
