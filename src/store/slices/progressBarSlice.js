import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	timeProgress: 0,
	duration: 0,
}

const progressBarSlice = createSlice({
	name: 'progressBar',
	initialState,
	reducers: {
		setTimeProgress: (state, action) => {
			state.timeProgress = action.payload
		},
		setDuration: (state, action) => {
			state.duration = action.payload
		},
	},
})

export const { setTimeProgress, setDuration } = progressBarSlice.actions

export default progressBarSlice.reducer
