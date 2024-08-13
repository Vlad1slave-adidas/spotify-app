async function redirectToSpotifyAuthorize() {
	const clientId = '05bc5a85c563453faf18235022d409d9'
	const redirectUrl = 'http://localhost:5173'

	const authorizationEndpoint = 'https://accounts.spotify.com/authorize'
	const scope =
		'user-read-private user-read-email user-library-modify playlist-modify-public playlist-modify-private user-library-read'

	const possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const randomValues = crypto.getRandomValues(new Uint8Array(64))
	const randomString = randomValues.reduce(
		(acc, x) => acc + possible[x % possible.length],
		'',
	)

	const code_verifier = randomString
	const data = new TextEncoder().encode(code_verifier)
	const hashed = await crypto.subtle.digest('SHA-256', data)

	const code_challenge_base64 = btoa(
		String.fromCharCode(...new Uint8Array(hashed)),
	)
		.replace(/=/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_')

	window.localStorage.setItem('code_verifier', code_verifier)

	const authUrl = new URL(authorizationEndpoint)
	const params = {
		response_type: 'code',
		client_id: clientId,
		scope: scope,
		code_challenge_method: 'S256',
		code_challenge: code_challenge_base64,
		redirect_uri: redirectUrl,
	}

	authUrl.search = new URLSearchParams(params).toString()
	window.location.href = authUrl.toString()
}

export default redirectToSpotifyAuthorize
