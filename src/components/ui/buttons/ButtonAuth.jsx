function ButtonAuth({ text, action }) {
	return (
		<button
			className='rounded-3xl border-2 border-black bg-white px-7 py-2 font-semibold text-black transition-all duration-100 ease-linear hover:bg-green-500 hover:text-white active:bg-green-600'
			onClick={action}
		>
			{text}
		</button>
	)
}

export default ButtonAuth
