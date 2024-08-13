import { useGetACategoryPlaylistsQuery } from '../../services/spotifyApi'
import PlaylistCard from '../cards/PlaylistCard'
import ButtonSeeAll from '../ui/buttons/ButtonSeeAll'
import Loader from '../ui/loader/Loader'

function MusicCategory({ limit, id, page }) {
	const { data, isLoading, error } = useGetACategoryPlaylistsQuery({
		category_id: id,
		limit: limit,
	})

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error.message}</div>
			) : (
				data && (
					<div className='mb-10'>
						<div className='flex items-center justify-between'>
							<h1 className='mb-8 text-3xl font-bold'>{data.message}</h1>
							{limit ? <ButtonSeeAll id={id} /> : <div></div>}
						</div>

						<div
							className={`${page === 'Home' ? 'flex max-w-full justify-between gap-6' : 'flex max-w-full flex-wrap justify-center gap-6'}`}
						>
							{data.playlists.items.map((item, index) => (
								<article
									key={`${item.id}-${index}`}
									className='max-lg:last:hidden max-md:[&:nth-last-child(-n+2)]:hidden max-xs:[&:nth-last-child(-n+3)]:hidden'
								>
									<PlaylistCard
										image={item.images[0].url}
										name={item.name}
										artists={item.artists}
										id={item.id}
									/>
								</article>
							))}
						</div>
					</div>
				)
			)}
		</div>
	)
}

export default MusicCategory
