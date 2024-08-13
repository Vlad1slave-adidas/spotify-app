import { useGetAListOfCurrentUsersPlaylistsQuery } from '../../services/libraryApi'
import PlaylistCard from '../cards/PlaylistCard'
import Loader from '../ui/loader/Loader'

function PlaylistsSection() {
	const { isLoading, error, data } = useGetAListOfCurrentUsersPlaylistsQuery()

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
								<PlaylistCard
									key={item.id}
									image={item.images[0].url}
									name={item.name}
									id={item.id}
								/>
							))}
						</div>
					</div>
				)
			)}
		</>
	)
}

export default PlaylistsSection
