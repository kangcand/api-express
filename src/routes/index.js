const router = require('express').Router();
// another route below this line
const penulisRoute = require('./penulis');

// router.get('/', (req, res) => {
//     res.send('Hello World!')
// })

router.use('/penulis', penulisRoute);
// other route
module.exports = router;