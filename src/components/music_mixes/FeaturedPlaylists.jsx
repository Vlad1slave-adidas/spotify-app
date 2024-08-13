import useSlider from '../../hooks/useSlider'
import { useGetFeaturedPlaylistQuery } from '../../services/spotifyApi'
import PlaylistSliderCard from '../cards/PlaylistSliderCard'
import ButtonsSlider from '../ui/buttons/ButtonsSlider'
import Loader from '../ui/loader/Loader'

function FeaturedPlaylists() {
	const { data, isLoading, error } = useGetFeaturedPlaylistQuery()

	const { animationClass, getVisibleItems, goToPrevSlide, goToNextSlide } =
		useSlider()

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error.message}</div>
			) : (
				data && (
					<div className='relative mb-12'>
						<h2 className='mb-6 text-4xl font-bold'>Popular Playlists</h2>
						<div className={` ${animationClass} `}>
							<div className='grid h-80 grid-cols-2 grid-rows-3 gap-6 max-xs:h-max'>
								{getVisibleItems(data).map(playlist => (
									<PlaylistSliderCard
										key={playlist.id}
										image={playlist.images[0].url}
										playlistName={playlist.name}
										id={playlist.id}
									/>
								))}
							</div>

							<ButtonsSlider
								goToPrevSlide={goToPrevSlide}
								goToNextSlide={goToNextSlide}
							/>
						</div>
					</div>
				)
			)}
		</div>
	)
}

export default FeaturedPlaylists
