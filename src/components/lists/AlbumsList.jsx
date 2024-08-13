import AlbumCard from '../cards/AlbumCard'

function AlbumLists({ albums }) {
	const displayAlbums = albums?.slice(0, 7)

	return (
		<>
			{albums && (
				<div>
					<h3 className='mb-3 text-2xl font-bold'>Albums</h3>
					<div className='flex max-w-full justify-between overflow-x-auto'>
						{displayAlbums.map(album => (
							<div
								key={album.id}
								className='max-xl:[&:nth-last-child(-n+1)]:hidden max-lg:[&:nth-last-child(-n+2)]:hidden max-md:[&:nth-last-child(-n+3)]:hidden'
							>
								<AlbumCard
									key={album.id}
									id={album.id}
									image={album.images[0].url}
									artists={album.artists}
									year={album.release_date.slice(0, 4)}
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default AlbumLists
