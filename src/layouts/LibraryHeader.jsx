import UserProfile from '../components/profile/UserProfile'
import ButtonLibrary from '../components/ui/buttons/ButtonLibrary'
import ButtonPagination from '../components/ui/buttons/ButtonsPagination'

function LibraryHeader({ handleChangeLibrarySection }) {
	return (
		<div className='sticky top-0 flex h-14 w-full items-center justify-between bg-black px-12'>
			<div className='flex h-full justify-start gap-16'>
				<ButtonPagination page={'library'} />
				<div className='flex h-full justify-start gap-2'>
					<ButtonLibrary
						action={() => handleChangeLibrarySection('playlists')}
						text={'Playlists'}
					/>
					<ButtonLibrary
						action={() => handleChangeLibrarySection('albums')}
						text={'Albums'}
					/>
				</div>
			</div>

			<div>
				<UserProfile />
			</div>
		</div>
	)
}

export default LibraryHeader
