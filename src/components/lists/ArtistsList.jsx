import ArtistCard from '../cards/ArtistCard'

function ArtistsList({ artists }) {
	const displayArtists = artists?.slice(0, 7)

	return (
		<>
			{artists && (
				<div>
					<h3 className='mb-4 text-2xl font-bold'>Artists</h3>
					<div className='flex w-full justify-between overflow-x-auto'>
						{displayArtists.map(artist => (
							<div
								key={artist.id}
								className='max-xl:[&:nth-last-child(-n+1)]:hidden max-lg:[&:nth-last-child(-n+2)]:hidden max-md:[&:nth-last-child(-n+3)]:hidden'
							>
								<ArtistCard
									id={artist.id}
									image={
										artist.images && artist.images.length > 0
											? artist.images[0].url
											: '/images/empty-artist.png'
									}
									name={artist.name}
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default ArtistsList
