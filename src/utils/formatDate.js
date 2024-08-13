function formatDate(date) {
	let currentDate = new Date().toUTCString()
	const dateObject = new Date(date)

	let dateAdded = currentDate - dateObject

	return dateAdded
}

export default formatDate
