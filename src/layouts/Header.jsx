import UserProfile from '../components/profile/UserProfile'
import ButtonPagination from '../components/ui/buttons/ButtonsPagination'

function Header() {
	return (
		<div className='mb-6 flex justify-between'>
			<ButtonPagination />
			<UserProfile />
		</div>
	)
}

export default Header
