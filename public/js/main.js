let socket
let pool = []
let holder

document.addEventListener('DOMContentLoaded', function() {
	console.log('DOMContentLoaded')

	holder = document.getElementById('holder')

	socket = io.connect('http://localhost:5000')

	socket.on('api-health', function(data) {
		console.log('handle api-health:', data)
		pool.push(data)

		createDiv(data.timestamp)
		createDiv(data.method)
		createDiv(data.statusCode)
		createDiv(data.query)
	})
})

function createDiv(data) {
	const item = document.createElement('div')
	item.innerHTML = JSON.stringify(data)
	holder.appendChild(item)
}
