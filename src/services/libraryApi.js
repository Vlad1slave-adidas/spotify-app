import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://api.spotify.com/v1'
const token = window.localStorage.getItem('token')

export const libraryApi = createApi({
	reducerPath: 'library',
	tagTypes: ['followedPlaylists', 'followedTracks', 'followedAlbums'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: headers => {
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
				headers.set('Accept-Language', 'en')
			}
			return headers
		},
	}),
	endpoints: builder => ({
		saveTracksForUser: builder.mutation({
			query: ids => ({
				url: '/me/tracks',
				method: 'PUT',
				params: { ids: ids },
			}),
			invalidatesTags: () => [
				{
					type: 'followedTracks',
				},
			],
		}),
		removeTracksForUser: builder.mutation({
			query: ids => ({
				url: '/me/tracks',
				method: 'DELETE',
				params: { ids: ids },
			}),
			invalidatesTags: () => [
				{
					type: 'followedTracks',
				},
			],
		}),
		getUsersSavedTracks: builder.query({
			query: () => ({
				url: '/me/tracks',
				params: { market: 'from_token', limit: 50, offset: 0 },
			}),
			providesTags: () => [
				{
					type: 'followedTracks',
				},
			],
		}),
		checkUsersSavedTracks: builder.query({
			query: ids => ({
				url: `/me/tracks/contains`,
				params: { ids: ids },
			}),
			providesTags: () => [
				{
					type: 'followedTracks',
				},
			],
		}),
		followPlaylist: builder.mutation({
			query: playlist_id => ({
				url: `/playlists/${playlist_id}/followers`,
				method: 'PUT',
			}),
			invalidatesTags: () => [
				{
					type: 'followedPlaylists',
				},
			],
		}),
		unfollowPlaylist: builder.mutation({
			query: playlist_id => ({
				url: `/playlists/${playlist_id}/followers`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [
				{
					type: 'followedPlaylists',
				},
			],
		}),
		getAListOfCurrentUsersPlaylists: builder.query({
			query: () => '/me/playlists',
			providesTags: () => [
				{
					type: 'followedPlaylists',
				},
			],
		}),
		checkFollowAPlaylist: builder.query({
			query: ({ user_id, playlist_id }) => ({
				url: `/playlists/${playlist_id}/followers/contains`,
				params: { ids: user_id },
			}),
			providesTags: () => [
				{
					type: 'followedPlaylists',
				},
			],
		}),
		followAlbum: builder.mutation({
			query: album_id => ({
				url: `/me/albums`,
				method: 'PUT',
				params: { ids: album_id },
			}),
			invalidatesTags: () => [
				{
					type: 'followedAlbums',
				},
			],
		}),
		unfollowAlbum: builder.mutation({
			query: album_id => ({
				url: `/me/albums`,
				method: 'DELETE',
				params: { ids: album_id },
			}),
			invalidatesTags: () => [
				{
					type: 'followedAlbums',
				},
			],
		}),
		getUsersSavedAlbums: builder.query({
			query: () => '/me/albums',
			providesTags: () => [
				{
					type: 'followedAlbums',
				},
			],
		}),
		checkFollowAlbum: builder.query({
			query: album_id => ({
				url: `/me/albums/contains`,
				params: { ids: album_id },
			}),
			providesTags: () => [
				{
					type: 'followedAlbums',
				},
			],
		}),
	}),
})

export const {
	useSaveTracksForUserMutation,
	useRemoveTracksForUserMutation,
	useGetUsersSavedTracksQuery,
	useCheckUsersSavedTracksQuery,
	useFollowPlaylistMutation,
	useUnfollowPlaylistMutation,
	useGetAListOfCurrentUsersPlaylistsQuery,
	useCheckFollowAPlaylistQuery,
	useFollowAlbumMutation,
	useUnfollowAlbumMutation,
	useGetUsersSavedAlbumsQuery,
	useCheckFollowAlbumQuery,
} = libraryApi
