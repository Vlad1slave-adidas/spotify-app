import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import {
	clearTracksHistory,
	nextTrack,
	prevTrack,
	setTracksHistory,
	shuffleTracksHistory,
} from '../store/slices/audioSlice'
import {
	addTrackToLikedSongs,
	removeTrackFromLikedSongs,
} from '../store/slices/likedSongsSlice'
import { setDuration, setTimeProgress } from '../store/slices/progressBarSlice'

const rootActions = {
	shuffleTracksHistory,
	setTracksHistory,
	clearTracksHistory,
	prevTrack,
	nextTrack,
	addTrackToLikedSongs,
	removeTrackFromLikedSongs,
	setTimeProgress,
	setDuration,
}

function useActions() {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions
