const onHeaders = require('on-headers')
const socket = require('socket.io')
let io

const middleware = (req, res, next) => {
	if (io === undefined || io === null) {
		io = socket(req.socket.server)
	}
	io.on('connection', function(socket) {
		console.log('> new connection: ' + socket.id)
		connection = socket
	})

	onHeaders(res, function() {
		const data = {
			method: this.req.method,
			statusCode: this.req.res.statusCode,
			baseUrl: this.req.baseUrl,
			url: this.req.url,
			query: this.req.query,
			timestamp: Date.now()
		}
		console.log('\nonHeader handler:', data)
		if (io) {
			io.emit('api-health', data)
		}
	})

	next()
}

module.exports = middleware
