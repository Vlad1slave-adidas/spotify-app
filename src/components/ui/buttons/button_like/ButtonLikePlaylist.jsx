import { IoMdHeart } from 'react-icons/io'

import {
	useCheckFollowAPlaylistQuery,
	useFollowPlaylistMutation,
	useUnfollowPlaylistMutation,
} from '../../../../services/libraryApi'

import { skipToken } from '@reduxjs/toolkit/query'
import { useGetCurrentUserQuery } from '../../../../services/spotifyApi'

function ButtonLikePlaylist({ style, id }) {
	const { data: user } = useGetCurrentUserQuery()
	const [followPlaylist] = useFollowPlaylistMutation()
	const [unfollowPlaylist] = useUnfollowPlaylistMutation()
	const { data: isFollow } = useCheckFollowAPlaylistQuery(
		user
			? {
					user_id: user.id,
					playlist_id: id,
				}
			: skipToken,
	)

	const toggleActiveLike = async () => {
		if (isFollow && !isFollow[0]) {
			await followPlaylist(id)
		} else {
			await unfollowPlaylist(id)
		}
	}

	return (
		isFollow && (
			<button
				className='transition-transform duration-100 ease-linear hover:scale-125'
				onClick={toggleActiveLike}
			>
				<IoMdHeart
					style={{ color: isFollow[0] ? 'green' : 'white', ...style }}
				/>
			</button>
		)
	)
}

export default ButtonLikePlaylist
