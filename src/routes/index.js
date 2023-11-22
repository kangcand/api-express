const router = require('express').Router();
// another route below this line
const penulisRoute = require('./penulis');
const bukuRoute = require('./buku');

router.use('/penulis', penulisRoute);
// other route
router.use('/buku', bukuRoute);

module.exports = router;