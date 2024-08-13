import { createSlice } from '@reduxjs/toolkit'
import shuffleArray from '../../utils/shuffleArray'

const initialState = {
	tracksHistory: [],
	currentTrack: {},
}

const audioSlice = createSlice({
	name: 'audio',
	initialState,
	reducers: {
		setTracksHistory: (state, action) => {
			const isExist = state.tracksHistory.some(t => t.id === action.payload.id)

			if (isExist) {
				const index = state.tracksHistory.findIndex(
					item => item.id === action.payload.id,
				)
				if (index !== -1) {
					state.tracksHistory.splice(index, 1)
				}

				state.tracksHistory.push(action.payload)
			} else {
				state.tracksHistory.push(action.payload)
			}

			if (
				action.payload.type === 'playlist' ||
				action.payload.type === 'album' ||
				action.payload.type === 'liked_songs' ||
				action.payload.type === 'artist'
			) {
				state.currentTrack = state.tracksHistory[0]
			} else {
				state.currentTrack = state.tracksHistory.at(-1)
			}
		},
		prevTrack: state => {
			const currentIndex = state.tracksHistory.findIndex(
				track => track.id === state.currentTrack.id,
			)

			if (currentIndex > 0) {
				state.currentTrack = state.tracksHistory[currentIndex - 1]
			} else {
				state.currentTrack = state.tracksHistory[0]
			}
		},
		nextTrack: state => {
			const currentIndex = state.tracksHistory.findIndex(
				track => track.id === state.currentTrack.id,
			)

			if (currentIndex < state.tracksHistory.length - 1) {
				state.currentTrack = state.tracksHistory[currentIndex + 1]
			} else {
				state.currentTrack = state.tracksHistory.at(-1)
			}
		},
		clearTracksHistory: state => {
			state.tracksHistory.splice(0, state.tracksHistory.length)
		},
		shuffleTracksHistory: state => {
			shuffleArray(state.tracksHistory)
		},
	},
})

export const {
	setTracksHistory,
	prevTrack,
	nextTrack,
	clearTracksHistory,
	shuffleTracksHistory,
} = audioSlice.actions

export default audioSlice.reducer
