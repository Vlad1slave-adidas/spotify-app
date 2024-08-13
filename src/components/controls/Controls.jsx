import { FaCirclePause, FaCirclePlay } from 'react-icons/fa6'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useActions from '../../hooks/useActions'
import ButtonLikePlaylist from '../ui/buttons/button_like/ButtonLikePlaylist'
import ButtonLikeAlbum from '../ui/buttons/button_like/ButtonLikeAlbum'

function Controls({ tracks, type, playlistId, albumId, image }) {
	const [isPlay, setIsPlay] = useState(false)
	const tracksHistory = useSelector(state => state.audio.tracksHistory)
	const { setTracksHistory, clearTracksHistory } = useActions()

	const handlePlayClick = useCallback(() => {
		if (!isPlay && tracks && type === 'playlist') {
			tracks.map(item =>
				setTracksHistory({
					type: type,
					id: item.track.id,
					audioURL: item.track.preview_url,
					imageURL: item.track.album.images[0].url,
					name: item.track.name,
					artists: item.track.artists,
				}),
			)
		}

		if (!isPlay && tracks && type === 'liked_songs') {
			tracks.map(track =>
				setTracksHistory({
					type: type,
					id: track.track.id,
					audioURL: track.track.preview_url,
					imageURL: track.track.album.images[0].url,
					name: track.track.name,
					artists: track.track.artists,
				}),
			)
		}

		if (!isPlay && tracks && type === 'album') {
			tracks.map(track =>
				setTracksHistory({
					type: type,
					id: track.id,
					audioURL: track.preview_url,
					imageURL: image,
					name: track.name,
					artists: track.artists,
				}),
			)
		}

		if (!isPlay && tracks && type === 'artist') {
			tracks.map(track =>
				setTracksHistory({
					type: type,
					id: track.id,
					audioURL: track.preview_url,
					imageURL: track.album.images[0].url,
					name: track.name,
					artists: track.artists,
				}),
			)
		}

		setIsPlay(!isPlay)
	}, [tracks, isPlay])

	useEffect(() => {
		if (!isPlay) {
			clearTracksHistory()
		}
	}, [isPlay])

	return (
		<div className='mb-6 flex items-center gap-5'>
			<button
				onClick={handlePlayClick}
				className='text-5xl text-green-600 transition-transform duration-100 ease-linear hover:scale-110'
			>
				{isPlay ? <FaCirclePause /> : <FaCirclePlay />}
			</button>
			{type === 'playlist' && (
				<ButtonLikePlaylist style={{ fontSize: '30px' }} id={playlistId} />
			)}
			{type === 'album' && (
				<ButtonLikeAlbum style={{ fontSize: '30px' }} id={albumId} />
			)}
		</div>
	)
}

export default Controls
