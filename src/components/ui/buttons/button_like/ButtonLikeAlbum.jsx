import { IoMdHeart } from 'react-icons/io'
import {
	useCheckFollowAlbumQuery,
	useFollowAlbumMutation,
	useUnfollowAlbumMutation,
} from '../../../../services/libraryApi'
import { skipToken } from '@reduxjs/toolkit/query'

function ButtonLikeAlbum({ id, style }) {
	const [followAlbum] = useFollowAlbumMutation()
	const [unfollowAlbum] = useUnfollowAlbumMutation()
	const { data: isFollow } = useCheckFollowAlbumQuery(id ? id : skipToken)

	const toggleActiveLike = async () => {
		if (isFollow && !isFollow[0]) {
			await followAlbum(id)
		} else {
			await unfollowAlbum(id)
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

export default ButtonLikeAlbum
