import { useGetCurrentUserQuery } from '../../services/spotifyApi'
import { IoMdArrowDropdown } from 'react-icons/io'
import DropdownProfile from '../ui/dropdown/DropdownProfile'
import { useEffect, useRef, useState } from 'react'

function UserProfile() {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef(null)

	const handleOpenMenu = e => {
		setIsOpen(!isOpen)
	}

	const handleClickOutside = e => {
		if (menuRef.current && !menuRef.current.contains(e.target)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const { data } = useGetCurrentUserQuery()

	return (
		<div className='relative' ref={menuRef}>
			{data && (
				<button
					onClick={handleOpenMenu}
					className={
						'flex items-center rounded-3xl bg-black px-4 py-3 transition-colors duration-200 ease-in-out hover:scale-105 hover:bg-black_850'
					}
				>
					<img
						className='mr-3 rounded-full'
						src={data.images[0].url}
						width={25}
					></img>
					<span className='mr-1'>{data.display_name}</span>
					<IoMdArrowDropdown />
				</button>
			)}

			{isOpen && <DropdownProfile />}
		</div>
	)
}

export default UserProfile
