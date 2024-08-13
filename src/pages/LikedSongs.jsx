import Controls from '../components/controls/Controls'
import LikedSongsTitle from '../components/liked_songs/LikedSongsTitle'
import TracksOfLikedSongs from '../components/liked_songs/TracksOfLikedSongs'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import TracksHeader from '../layouts/TracksHeader'
import { useGetUsersSavedTracksQuery } from '../services/libraryApi'

function LikedSongs() {
	const { data } = useGetUsersSavedTracksQuery()

	return (
		<div className='flex min-h-screen bg-blue-gradient'>
			<Sidebar />
			<div className='w-full px-10 pb-24 pt-7'>
				<Header />
				<LikedSongsTitle />
				<Controls tracks={data?.items} type={'liked_songs'} />
				<TracksHeader />
				{data && <TracksOfLikedSongs data={data} />}
			</div>
		</div>
	)
}

export default LikedSongs
