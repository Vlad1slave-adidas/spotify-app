import { useNavigate } from 'react-router-dom'

function useOpen() {
	const navigate = useNavigate()

	const openAlbum = id => {
		navigate(`/album/${id}`)
	}

	const openPlaylist = id => {
		navigate(`/playlist/${id}`)
	}

	const openSection = id => {
		navigate(`/section/${id}`)
	}

	const openArtistPage = id => {
		navigate(`/artist/${id}`)
	}

	return { openAlbum, openPlaylist, openSection, openArtistPage }
}

export default useOpen
