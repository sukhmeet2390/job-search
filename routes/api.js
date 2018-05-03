// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is a sample API route. */

// router.get('/:resource', (req, res) => {
// 	res.json({
// 		confirmation: 'success',
// 		resource: req.params.resource,
// 		query: req.query // from the url query string
// 	})
// })

router.get('/job', (req, res) => {
	console.log("Job");
	turbo.fetch('team', null)
	.then(data =>{
		res.json({
			confirmation:'success',
			data: data
		})
	}).catch(err =>{
		res.json({
			confirmation: 'fail',
			message : err.message || 'Oops something went wrong'
		});
	})
})


router.get('/:resource/:id', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	})
})


router.post('/job', (req, res) => {
	turbo.create('team', req.body)
	.then(data => {
		res.json({
			confirmation:'success',
			data: data
		})
	})
	.catch(err => {
			res.json({
				confirmation: 'fail',
				message : err.message
			});
	});

})



module.exports = router
