const notFound = (req, res) => {
    console.log('=======================\n')
	// res.body = {
	// 	data: {
	// 	id: 1,
	// 	name: 'John Doe?'
	// 	}
	// }
    res.json({ success: true })
}

export default notFound