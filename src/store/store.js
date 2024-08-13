import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { spotifyApi } from '../services/spotifyApi'
import { authApi } from '../services/authApi'
import audioReducer from './slices/audioSlice'
import likedSongsReducer from './slices/likedSongsSlice'
import progressBarReducer from './slices/progressBarSlice'
import { libraryApi } from '../services/libraryApi'

const rootReducer = combineReducers({
	audio: audioReducer,
	likedSongs: likedSongsReducer,
	progressBar: progressBarReducer,
	[authApi.reducerPath]: authApi.reducer,
	[spotifyApi.reducerPath]: spotifyApi.reducer,
	[libraryApi.reducerPath]: libraryApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			spotifyApi.middleware,
			authApi.middleware,
			libraryApi.middleware,
		),
})
