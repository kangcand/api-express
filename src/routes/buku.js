const router = require('express').Router();
const { buku } = require('../controllers');

// mengeluarkan semua daftar Buku
router.get('/', buku.getDataBuku);

// show data berdasarkan parameter 'id'
router.get('/:id', buku.getDataBukuById);

// menambah data Buku
router.post('/add', buku.addDataBuku);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', buku.editDataBuku);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', buku.deleteDataBuku);

module.exports = router;