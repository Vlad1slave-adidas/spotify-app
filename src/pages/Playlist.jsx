import { useParams } from 'react-router-dom'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import { useGetPlaylistQuery } from '../services/spotifyApi'
import Controls from '../components/controls/Controls'
import PlaylistTitle from '../components/playlist/PlaylistTitle'
import TracksOfPLaylist from '../components/playlist/TracksOfPlaylist'
import TracksHeader from '../layouts/TracksHeader'

function Playlist() {
	const { id } = useParams()
	const { data, isLoading, error } = useGetPlaylistQuery(id)

	const tracks = data?.tracks.items

	return (
		<div className='flex min-h-screen bg-blue-gradient'>
			<Sidebar />
			<div className='w-full px-10 pb-24 pt-7'>
				<Header />
				<PlaylistTitle data={data} isLoading={isLoading} error={error} />
				<Controls tracks={tracks} type={'playlist'} playlistId={id} />
				<TracksHeader />
				<TracksOfPLaylist data={data} isLoading={isLoading} error={error} />
			</div>
		</div>
	)
}

export default Playlist
