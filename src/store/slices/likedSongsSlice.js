import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	likedSongs: [],
}

const likedSongsSlice = createSlice({
	name: 'likedSongs',
	initialState,
	reducers: {
		addTrackToLikedSongs: (state, action) => {
			const isExist = state.likedSongs.includes(action.payload)

			if (!isExist) {
				state.likedSongs.push(action.payload)
			}
		},
		removeTrackFromLikedSongs: (state, action) => {
			const isExist = state.likedSongs.includes(action.payload)

			if (isExist) {
				const removedTrack = state.likedSongs.findIndex(
					item => item === action.payload,
				)
				state.likedSongs.splice(removedTrack, 1)
			}
		},
	},
})

export const { addTrackToLikedSongs, removeTrackFromLikedSongs } =
	likedSongsSlice.actions

export default likedSongsSlice.reducer
