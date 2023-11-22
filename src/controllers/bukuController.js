const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataBuku = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM buku", function (error, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (data) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "gagal",
        });
    }
}

const getDataBukuById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM buku WHERE id = ?";
        connection.query(query, [id], function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });

    if (data.length > 0) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "Data tidak ditemukan",
        });
    }
}


const addDataBuku = async (req, res) => {
    let data = {
        id_penulis: req.body.id_penulis,
        judul: req.body.judul,
        isbn: req.body.isbn,
        deskripsi: req.body.deskripsi,
        qty: req.body.qty

    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO buku SET ?';
        connection.query(query, [data], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil menambah data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal menambah data",
        });
    }
}

const editDataBuku = async (req, res) => {
    let id = req.params.id;
    let data = {
        judul: req.body.judul,
        isbn: req.body.isbn,
        deskripsi: req.body.deskripsi,
        qty: req.body.qty,
        id_penulis: req.body.id_penulis,
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE buku SET ? where id = ?';
        connection.query(query, [data, id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil edit data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal edit data",
        });
    }
}

const deleteDataBuku = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM buku where id = ?';
        connection.query(query, [id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil hapus data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal hapus data",
        });
    }
}


module.exports = {
    getDataBuku,
    getDataBukuById,
    addDataBuku,
    editDataBuku,
    deleteDataBuku
}