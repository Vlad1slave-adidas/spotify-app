function ButtonLibrary({ text, action }) {
	return (
		<button
			onClick={action}
			className='h-full px-5 transition-colors duration-75 ease-linear hover:bg-white/15'
		>
			{text}
		</button>
	)
}
export default ButtonLibrary
