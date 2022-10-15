import { Router } from 'itty-router'

const router = Router() 

// a generic error handler
const errorHandler = error =>
	new Response(error.message || 'Server Error', { status: error.status || 500 })


// basic router
router.get('/', (req) => {
	const { params, query } = req

	console.log({ params, query })

	return new Response(JSON.stringify({code: "idjflasjdfkldja"}))
})

// Example :: KV put
router.post('/user', async (req) => {
	try {
		//const contents = JSON.stringify(await req.json())
		const contents = await req.json()
		const cKey = Object.keys(contents)
		const cVal = Object.values(contents)
		console.log('con:',contents.name)

		await KV_FP_Users.put(cKey[0], cVal[0])
	} catch(error) {
		console.error(error.message)
	}

	return new Response(JSON.stringify({code: "success"}))
})

//Example :: KV get
router.get('/user/:name', async (req) => {
	const result = {}
	try {
		const { params } = req
		const cKey = params.name
		//await KV_FP_Users.put('ukey', '38490328490899')
		//const ukey = await KV_FP_Users.get('ukey')
		let kvVal = await KV_FP_Users.get(cKey)
	
		console.log('kv- ukey:',kvVal)
		console.log('get toml var - UKEY:', UKEY)
		if (kvVal === null) {
			throw new Error('KV 값 없음.')
		}
		result.cKey = kvVal
	} catch(error) {
		console.error(error.message)
	}

	return new Response(JSON.stringify(result))
})


addEventListener('fetch', event => 
	event.respondWith(
		router
			.handle(event.request)
			.catch(errorHandler)
		)
)