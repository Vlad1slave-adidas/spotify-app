import { useRefreshTokenMutation } from '../services/authApi'

function useRefreshToken() {
	const expiresIn = window.localStorage.getItem('expires_in')
	const [refreshToken] = useRefreshTokenMutation()

	useEffect(() => {
		if (expiresIn) {
		}
		const timeout = setTimeout(
			() => {
				refreshToken()
			},
			(expiresIn - 3600) * 1000,
		)

		return () => clearTimeout(timeout)
	}, [expiresIn, refreshToken])

	return 0
}

export default useRefreshToken
