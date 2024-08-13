import { useParams } from 'react-router-dom'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import { useGetAlbumQuery } from '../services/spotifyApi'
import AlbumTitle from '../components/album/AlbumTitle'
import TracksOfAlbum from '../components/album/TracksOfAlbum'
import Controls from '../components/controls/Controls'
import TracksHeader from '../layouts/TracksHeader'

function Album() {
	const { id } = useParams()
	const { data, isLoading, error } = useGetAlbumQuery({ id: id, market: 'ES' })

	return (
		<div className='flex min-h-screen bg-blue-gradient'>
			<Sidebar />
			<div className='w-full px-10 pb-24 pt-7'>
				<Header />
				<AlbumTitle data={data} isLoading={isLoading} error={error} />
				<Controls
					tracks={data?.tracks.items}
					albumId={data?.id}
					type={'album'}
					image={data?.images[0].url}
				/>
				<TracksHeader />
				<TracksOfAlbum data={data} isLoading={isLoading} error={error} />
			</div>
		</div>
	)
}

export default Album
