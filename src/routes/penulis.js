const router = require('express').Router();
const { penulis } = require('../controllers');

// mengeluarkan semua daftar penulis
router.get('/', penulis.getDataPenulis);

// show data berdasarkan parameter 'id'
router.get('/:id', penulis.getDataPenulisById);

// menambah data penulis
router.post('/add', penulis.addDataPenulis);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', penulis.editDataPenulis);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', penulis.deleteDataPenulis);

module.exports = router;