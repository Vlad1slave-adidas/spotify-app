import { useState } from 'react'
import LibraryHeader from '../layouts/LibraryHeader'
import Sidebar from '../layouts/Sidebar'
import PlaylistsSection from '../components/library_sections/PlaylistsSection'
import AlbumSection from '../components/library_sections/AlbumSection'

function Library() {
	const [librarySection, setLibrarySection] = useState('playlists')

	const handleChangeLibrarySection = section => {
		setLibrarySection(section)
	}

	return (
		<div className='flex min-h-screen bg-blue-gradient'>
			<Sidebar />
			<main className='w-full'>
				<LibraryHeader
					handleChangeLibrarySection={handleChangeLibrarySection}
				/>
				{librarySection === 'playlists' && <PlaylistsSection />}
				{librarySection === 'albums' && <AlbumSection />}
			</main>
		</div>
	)
}

export default Library
