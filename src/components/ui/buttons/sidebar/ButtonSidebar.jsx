import { NavLink } from 'react-router-dom'

function ButtonSidebar({ icon, text, link }) {
	return (
		<NavLink to={`/${link}`}>
			{({ isActive, isPending, isTransitioning }) => (
				<div
					className={
						isActive
							? 'flex items-center gap-2 border-l-4 border-green-600 pl-4 text-lg font-semibold text-white'
							: isPending
								? 'flex items-center gap-2 border-l-4 border-yellow-500 text-lg font-semibold text-gray transition-colors duration-200 ease-linear'
								: isTransitioning
									? 'flex items-center gap-2 border-l-4 border-blue-500 text-lg font-semibold text-gray transition-colors duration-200 ease-linear'
									: 'flex items-center gap-2 border-l-4 border-transparent text-lg font-semibold text-gray transition-colors duration-200 ease-linear hover:text-white'
					}
				>
					<div>{icon}</div>
					<span>{text}</span>
				</div>
			)}
		</NavLink>
	)
}

export default ButtonSidebar
{
}
