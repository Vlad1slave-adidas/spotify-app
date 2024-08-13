import { IoMdHeart } from 'react-icons/io'

import {
	useCheckUsersSavedTracksQuery,
	useGetUsersSavedTracksQuery,
	useRemoveTracksForUserMutation,
	useSaveTracksForUserMutation,
} from '../../../../services/libraryApi'
import { skipToken } from '@reduxjs/toolkit/query'

function ButtonLikeTrack({ style, trackId }) {
	const { data: user } = useGetUsersSavedTracksQuery()
	const [saveTracksForUser] = useSaveTracksForUserMutation()
	const [removeTracksForUser] = useRemoveTracksForUserMutation()
	const { data: isFollow } = useCheckUsersSavedTracksQuery(
		user ? trackId : skipToken,
	)

	const toggleActiveLike = async () => {
		if (isFollow && !isFollow[0]) {
			await saveTracksForUser(trackId)
		} else {
			await removeTracksForUser(trackId)
		}
	}

	return (
		isFollow && (
			<button className='transition-transform duration-100 ease-linear hover:scale-125'>
				<IoMdHeart
					onClick={toggleActiveLike}
					style={{ color: isFollow[0] ? 'green' : 'white', ...style }}
				/>
			</button>
		)
	)
}

export default ButtonLikeTrack
