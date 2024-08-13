import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import ArtistTitle from '../components/artist/ArtistTitle'
import Controls from '../components/controls/Controls'
import PopularArtistsTracks from '../components/artist/PopularArtistTracks'
import ArtistMusic from '../components/artist/ArtistMusic'
import { useGetAnArtistsTopTracksQuery } from '../services/spotifyApi'
import { useParams } from 'react-router-dom'

function Artist() {
	const { id } = useParams()

	const { data, isLoading, error } = useGetAnArtistsTopTracksQuery(id)

	return (
		<div className='flex min-h-screen bg-blue-gradient'>
			<Sidebar />
			<div className='w-full px-10 pb-24 pt-7'>
				<Header />
				<ArtistTitle />
				<Controls
					type={'artist'}
					tracks={data?.tracks}
					id={id}
					image={data?.tracks?.album?.images[0].url}
				/>

				<PopularArtistsTracks data={data} isLoading={isLoading} error={error} />
				<ArtistMusic />
			</div>
		</div>
	)
}

export default Artist
