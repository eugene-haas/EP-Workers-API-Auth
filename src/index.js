import { Router } from '@tsndr/cloudflare-worker-router'

// Initialize router
const router = new Router()

// Enabling build in CORS support
router.cors()

// Register global middleware
router.use(({ req, res, next }) => {
	res.headers.set('X-Global-Middlewares', 'true')
	next()
})

//index
router.get('/', ({req, res}) => {
	res.body = 'Hi, Workers!'
})

// Simple get
router.get('/user', ({ req, res }) => {
	res.body = {
		data: {
		id: 1,
		name: 'John Doe'
		}
	}
})

// Post route with url parameter
router.post('/user/:id', ({ req, res }) => {

	const userId = req.params.id

	// Do stuff...

	if (errorDoingStuff) {
		res.status = 400
		res.body = {
		error: 'User did stupid stuff!'
		}
		return
	}

	res.status = 204
})

// Delete route using a middleware
router.delete('/user/:id', async ({ req, res, next }) => {

	if (!apiTokenIsCorrect) {
		res.status = 401
		return
	}

	await next()
}, (req, res) => {

	const userId = req.params.id

	// Do stuff...
})

// Listen Cloudflare Workers Fetch Event
export default {
	async fetch(request, env) {
		return router.handle(env, request)
	}
}