import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Auth from '../pages/Auth'
import Album from '../pages/Album'
import LikedSongs from '../pages/LikedSongs'
import Playlist from '../pages/Playlist'
import Section from '../pages/Section'
import scrollToTop from './scrollToTop'
import Library from '../pages/Library'
import Artist from '../pages/Artist'

function Root() {
	scrollToTop()

	return (
		<Routes>
			<Route path='/' element={<Auth />} />
			<Route path='/home' element={<Home />} />
			<Route path='/search' element={<Search />} />
			<Route path='/your_library' element={<Library />} />
			<Route path='/create_playlist' element={<Search />} />
			<Route path='/liked_songs' element={<LikedSongs />} />
			<Route path='/section/:id' element={<Section />} />
			<Route path='/album/:id' element={<Album />} />
			<Route path='/playlist/:id' element={<Playlist />} />
			<Route path='/artist/:id' element={<Artist />} />
		</Routes>
	)
}

export default Root
