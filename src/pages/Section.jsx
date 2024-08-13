import { useParams } from 'react-router-dom'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import MusicCategory from '../components/music_mixes/MusicCategory'

function Section() {
	const { id } = useParams()

	return (
		<div className='flex min-h-screen bg-blue-gradient'>
			<Sidebar />
			<div className='w-full px-10 pb-24 pt-7'>
				<Header />
				<MusicCategory id={id} />
			</div>
		</div>
	)
}

export default Section
