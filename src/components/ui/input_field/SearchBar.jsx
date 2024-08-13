import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoSearch } from 'react-icons/io5'

function SearchBar({ onTextChange }) {
	const [text, setText] = useState('')

	const handleChange = e => {
		setText(e.target.value)
		onTextChange(text)
	}

	return (
		<div className='flex h-10 w-96 items-center justify-start gap-2 rounded-3xl bg-white px-3 text-black max-xs:w-72'>
			<IoSearch className='text-xl' />
			<input
				className='w-full bg-white outline-none'
				type='text'
				placeholder='Artists, songs or podcasts'
				value={text}
				onChange={handleChange}
			></input>
		</div>
	)
}

export default SearchBar
