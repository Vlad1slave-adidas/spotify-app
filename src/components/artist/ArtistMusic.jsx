import { useState } from 'react'
import AlbumLists from '../lists/AlbumsList'
import {
	useGetAnArtistsAlbumsQuery,
	useGetAnArtistsRelatedArtistsQuery,
} from '../../services/spotifyApi'
import { useParams } from 'react-router-dom'
import ArtistsList from '../lists/ArtistsList'

function ArtistMusic() {
	const { id } = useParams()

	const [selectedSection, setSelectedSection] = useState('albums')

	const {
		data: albums,
		isLoading: isLoadingAlbums,
		error: errorAlbums,
	} = useGetAnArtistsAlbumsQuery(id)

	const {
		data: artists,
		isLoading: isLoadingArtists,
		error: errorArtists,
	} = useGetAnArtistsRelatedArtistsQuery(id)

	const handleChangeSection = section => {
		setSelectedSection(section)
	}

	return (
		<>
			<h3 className='mb-5 text-3xl font-bold'>Music</h3>
			<div className='mb-5 flex items-center justify-start gap-2'>
				<button
					onClick={() => handleChangeSection('albums')}
					className='rounded-xl bg-black_600 px-3 py-1 transition-colors duration-75 ease-linear hover:bg-white hover:text-black'
				>
					Albums
				</button>
				<button
					onClick={() => handleChangeSection('related_artists')}
					className='rounded-xl bg-black_600 px-3 py-1 transition-colors duration-75 ease-linear hover:bg-white hover:text-black'
				>
					Related Artists
				</button>
			</div>
			<div>
				{selectedSection === 'albums' ? (
					<AlbumLists albums={albums?.items} />
				) : (
					selectedSection === 'related_artists' && (
						<ArtistsList artists={artists?.artists} />
					)
				)}
			</div>
		</>
	)
}

export default ArtistMusic
