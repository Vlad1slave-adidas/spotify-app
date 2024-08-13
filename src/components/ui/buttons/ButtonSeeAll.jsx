import useOpen from '../../../hooks/useOpen'

function ButtonSeeAll({ id }) {
	const { openSection } = useOpen()

	return (
		<button
			onClick={() => openSection(id)}
			className='font-bold text-zinc-400 transition-colors duration-100 ease-linear hover:underline'
		>
			SEE ALL
		</button>
	)
}

export default ButtonSeeAll
