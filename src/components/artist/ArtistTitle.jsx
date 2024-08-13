import { useParams } from 'react-router-dom'
import Loader from '../ui/loader/Loader'
import { useGetAnArtistQuery } from '../../services/spotifyApi'

function ArtistTitle() {
	const { id } = useParams()

	const { data, isLoading, error } = useGetAnArtistQuery(id)

	return (
		<div className='mb-7'>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>{error.message}</div>
			) : (
				data && (
					<div className='mb-4 flex items-center gap-10'>
						<img src={data.images[0].url} width={250}></img>
						<div className=''>
							<h1 className='mb-10 text-7xl font-bold'>{data.name}</h1>
							<h3 className='text-xl font-semibold'>
								{data.followers.total} followers
							</h3>
						</div>
					</div>
				)
			)}
		</div>
	)
}

export default ArtistTitle
