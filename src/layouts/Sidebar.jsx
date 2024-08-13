import { AiFillHome } from 'react-icons/ai'
import { IoSearchOutline } from 'react-icons/io5'
import { BiLibrary } from 'react-icons/bi'
import { BsBagHeartFill } from 'react-icons/bs'
import ButtonSidebar from '../components/ui/buttons/sidebar/ButtonSidebar'
import { CgDetailsMore } from 'react-icons/cg'
import { useEffect, useRef, useState } from 'react'
import ButtonOpenSidebar from '../components/ui/buttons/sidebar/ButtonOpenSidebar'
import ButtonCloseSidebar from '../components/ui/buttons/sidebar/ButtonCloseSidebar'

function Sidebar() {
	const [displaySidebar, setDisplaySidebar] = useState(false)

	const sidebarRef = useRef()

	const handleOpenSidebar = () => {
		setDisplaySidebar(true)
	}

	const handleCloseSidebar = () => {
		setDisplaySidebar(false)
	}

	useEffect(() => {
		if (sidebarRef.current) {
			if (displaySidebar) {
				sidebarRef.current.classList.remove('max-sm:hidden')
				sidebarRef.current.classList.remove('sticky')
				sidebarRef.current.classList.add('fixed')
				sidebarRef.current.classList.add('z-20')
			} else {
				sidebarRef.current.classList.add('max-sm:hidden')
				sidebarRef.current.classList.add('sticky')
				sidebarRef.current.classList.remove('fixed')
				sidebarRef.current.classList.remove('z-20')
			}
		}
	}, [displaySidebar])

	return (
		<>
			<div className='min-sm:hidden'>
				{!displaySidebar && <ButtonOpenSidebar action={handleOpenSidebar} />}
				{displaySidebar && <ButtonCloseSidebar action={handleCloseSidebar} />}
			</div>
			<div className='max-sm:hidden' ref={sidebarRef}>
				<div className='sticky left-0 top-0 min-h-lvh w-52 bg-black px-8 py-16 max-md:w-48'>
					<div className='mb-12 flex flex-col gap-4'>
						<ButtonSidebar icon={<AiFillHome />} text={'Home'} link={'home'} />
						<ButtonSidebar
							icon={<IoSearchOutline />}
							text={'Search'}
							link={'search'}
						/>
						<ButtonSidebar
							icon={<BiLibrary />}
							text={'Your library'}
							link={'your_library'}
						/>
					</div>
					<div className='mb-12 flex flex-col gap-4'>
						<ButtonSidebar
							icon={<BsBagHeartFill />}
							text={'Liked songs'}
							link={'liked_songs'}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Sidebar
