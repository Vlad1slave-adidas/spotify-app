import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://accounts.spotify.com/api/token'
const clientId = '05bc5a85c563453faf18235022d409d9'
const redirectUrl = 'http://localhost:5173'

const codeVerifier = window.localStorage.getItem('code_verifier')
const refreshToken = window.localStorage.getItem('refresh_token')

export const authApi = createApi({
	reducerPath: 'auth',
	tagTypes: ['auth'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	}),
	endpoints: builder => ({
		getToken: builder.mutation({
			query: code => ({
				method: 'POST',
				body: new URLSearchParams({
					client_id: clientId,
					grant_type: 'authorization_code',
					code: code,
					redirect_uri: redirectUrl,
					code_verifier: codeVerifier,
				}),
			}),
		}),
		refreshToken: builder.mutation({
			query: () => ({
				method: 'POST',
				body: new URLSearchParams({
					client_id: clientId,
					grant_type: 'refresh_token',
					refresh_token: refreshToken,
				}),
			}),
		}),
	}),
})

export const { useGetTokenMutation, useRefreshTokenMutation } = authApi
