import FeaturedPlaylists from '../components/music_mixes/FeaturedPlaylists'
import MusicCategory from '../components/music_mixes/MusicCategory'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import { useGetAllCategoriesQuery } from '../services/spotifyApi'

function Home() {
	const { data } = useGetAllCategoriesQuery(9)

	return (
		<div className='flex min-h-screen bg-blue-gradient'>
			<Sidebar />
			<main className='w-full px-10 pb-24 pt-7'>
				<Header />
				<FeaturedPlaylists />
				{data &&
					data.categories.items.map(category => (
						<MusicCategory
							key={category.id}
							id={category.id}
							limit={5}
							page={'Home'}
						/>
					))}
			</main>
		</div>
	)
}

export default Home
