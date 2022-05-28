const express = require('express')
const todoRoute = require('../controller/todo.controller')
const router = express.Router()

router.get('/', (req,res) => {
    res.json({message: 'Hello World'})
})

router.get('/Kategori', todoRoute.listKategori)
router.get('/Kategori/:id', todoRoute.detailKategori)
router.post('/Kategori', todoRoute.insertKategori)
router.put('/Kategori/:id', todoRoute.updateKategori)
router.delete('/Kategori/:id', todoRoute.deleteKategori)

router.get('/Product', todoRoute.listProduct)
router.get('/Product/:id', todoRoute.detailProduct)
router.post('/Product', todoRoute.insertProduct)
router.put('/Product/:id', todoRoute.updateProduct)
router.delete('/Product/:id', todoRoute.deleteProduct)

// router.get('/Price', todoRoute.listPrice)
// router.get('/Price/:id', todoRoute.detailPrice)
// router.post('/Price', todoRoute.insertPrice)
// router.put('/Price/:id', todoRoute.updatePrice)
// router.delete('/Price/:id', todoRoute.deletePrice)

module.exports = router