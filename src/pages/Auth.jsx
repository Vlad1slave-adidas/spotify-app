import { useNavigate } from 'react-router-dom'
import { useGetTokenMutation } from '../services/authApi'
import redirectToSpotifyAuthorize from '../services/helpers/redirectToSpotifyAuthorize'
import { BsSpotify } from 'react-icons/bs'
import ButtonAuth from '../components/ui/buttons/ButtonAuth'
import { useEffect } from 'react'

function Auth() {
	const args = new URLSearchParams(window.location.search)
	const code = args.get('code')

	const navigate = useNavigate()

	const [getToken] = useGetTokenMutation()

	useEffect(() => {
		if (code) {
			handleToken()
		}
	}, [code])

	const handleToken = async () => {
		if (code) {
			const data = await getToken(code).unwrap()

			const token = data.access_token
			const refreshToken = data.refresh_token
			const expiresIn = data.expires_in

			const now = new Date()
			const expiry = new Date(now.getTime() + expiresIn * 1000)
			localStorage.setItem('expires', expiry)

			window.localStorage.setItem('token', token)
			window.localStorage.setItem('refresh_token', refreshToken)
			window.localStorage.setItem('expires_in', expiresIn)
		}
	}

	const redirectToSpotifyApp = () => {
		navigate('/home')
	}

	return (
		<>
			<div className='flex h-lvh w-full justify-center bg-black_850'>
				<div className='mt-32 text-center'>
					<div className='mb-44 flex items-center gap-6'>
						<BsSpotify className='text-9xl text-green-600' />
						<span className='text-7xl font-semibold'>Spotify</span>
					</div>

					{code ? (
						<ButtonAuth text={'Login'} action={redirectToSpotifyApp} />
					) : (
						<ButtonAuth
							text={'Login to Spotify'}
							action={redirectToSpotifyAuthorize}
						/>
					)}
				</div>
			</div>
		</>
	)
}

export default Auth
