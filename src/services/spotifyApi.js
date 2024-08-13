import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://api.spotify.com/v1'
const token = window.localStorage.getItem('token')

export const spotifyApi = createApi({
	reducerPath: 'spotify',
	tagTypes: ['followedPlaylists', 'followedTracks'],
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
		getCurrentUser: builder.query({
			query: () => '/me',
		}),
		getAllCategories: builder.query({
			query: limit => ({
				url: '/browse/categories',
				params: { limit: limit },
			}),
		}),
		getACategoryPlaylists: builder.query({
			query: ({ category_id, limit }) => ({
				url: `/browse/categories/${category_id}/playlists`,
				params: { limit: limit },
			}),
		}),
		getNewReleases: builder.query({
			query: limit => ({
				url: '/browse/new-releases',
				params: { limit: limit },
			}),
		}),
		getAlbum: builder.query({
			query: ({ id, market }) => ({
				url: `/albums/${id}`,
				params: { id, market },
			}),
		}),
		getAlbums: builder.query({
			query: ({ id, market }) => ({
				url: `/tracks?ids=${id}`,
				params: { id, market },
			}),
		}),
		getTracksOfAlbum: builder.query({
			query: ({ id, market }) => ({
				url: `/albums/${id}/tracks`,
				params: { id, market },
			}),
		}),
		getSeveralTracks: builder.query({
			query: ({ ids, market }) => ({
				url: `/tracks`,
				params: { ids, market },
			}),
		}),
		getRecommendationGenres: builder.query({
			query: () => '/genres',
		}),
		searchForAnItem: builder.query({
			query: ({ q, type, market, limit, offset }) => ({
				url: 'search',
				params: { q, type, market, limit, offset },
			}),
		}),
		getFeaturedPlaylist: builder.query({
			query: () => ({
				url: '/browse/featured-playlists',
				params: { limit: '18' },
			}),
		}),
		getPlaylistItems: builder.query({
			query: playlist_id => ({
				url: `/playlists/${playlist_id}/tracks`,
				params: playlist_id,
			}),
		}),
		getPlaylist: builder.query({
			query: playlist_id => ({
				url: `/playlists/${playlist_id}`,
				params: { playlist_id, additional_types: 'playlist' },
			}),
		}),
		getAnArtist: builder.query({
			query: id => ({
				url: `/artists/${id}`,
			}),
		}),
		getAnArtistsTopTracks: builder.query({
			query: id => ({
				url: `/artists/${id}/top-tracks`,
				market: 'from_token',
			}),
		}),
		getAnArtistsAlbums: builder.query({
			query: id => `/artists/${id}/albums`,
		}),
		getAnArtistsAlbums: builder.query({
			query: id => `/artists/${id}/albums`,
		}),
		getAnArtistsRelatedArtists: builder.query({
			query: id => `/artists/${id}/related-artists`,
		}),
	}),
})

export const {
	useGetCurrentUserQuery,
	useGetAllCategoriesQuery,
	useGetACategoryPlaylistsQuery,
	useGetAlbumQuery,
	useGetAlbumsQuery,
	useGetNewReleasesQuery,
	useGetTracksOfAlbumQuery,
	useGetSeveralTracksQuery,
	useSearchForAnItemQuery,
	useGetFeaturedPlaylistQuery,
	useGetPlaylistItemsQuery,
	useGetPlaylistQuery,
	useGetAnArtistQuery,
	useGetAnArtistsTopTracksQuery,
	useGetAnArtistsAlbumsQuery,
	useGetAnArtistsRelatedArtistsQuery,
} = spotifyApi
