import { useState } from 'react'
import SearchBar from '../components/ui/input_field/SearchBar'
import Sidebar from '../layouts/Sidebar'
import { useSearchForAnItemQuery } from '../services/spotifyApi'
import ArtistBestResultCard from '../components/cards/ArtistBestResultCard'
import TrackCard from '../components/cards/TrackCard'
import ArtistsList from '../components/lists/ArtistsList'
import AlbumLists from '../components/lists/AlbumsList'

function Search() {
	const [text, setText] = useState('')

	const handleChangeText = text => {
		setText(text)
	}

	const { data, isLoading, error } = useSearchForAnItemQuery(
		{
			q: text,
			type: 'album,artist,track',
			market: 'ES',
			limit: '7',
			offset: '0',
		},
		{ skip: !text },
	)

	return (
		<>
			<div className='flex'>
				<Sidebar />
				<main className='min-h-screen w-full bg-black_850'>
					<div className='sticky right-0 top-0 z-10 flex h-16 w-full items-center justify-center bg-neutral-950'>
						<SearchBar onTextChange={handleChangeText} />
					</div>
					<div className='min-h-lvh w-full px-10 pb-24 pt-5'>
						{text && data && (
							<div>
								<div className='mb-10 flex justify-center gap-20 max-md:flex-col max-lg:gap-10'>
									<ArtistBestResultCard
										data={data}
										isLoading={isLoading}
										error={error}
									/>
									<div className='w-full'>
										<h2 className='mb-6 text-2xl font-bold'>Tracks</h2>
										{data.tracks.items.map((track, index) => (
											<TrackCard
												key={track.id}
												image={track.album.images[0].url}
												trackName={track.name}
												trackId={track.id}
												time={track.duration_ms}
												artists={track.artists}
												counter={(index += 1)}
												audioURL={track.preview_url}
											/>
										))}
									</div>
								</div>

								<div className='mb-6'>
									<ArtistsList artists={data?.artists?.items} />
								</div>

								<AlbumLists albums={data?.albums?.items} />
							</div>
						)}
					</div>
				</main>
			</div>
		</>
	)
}

export default Search
