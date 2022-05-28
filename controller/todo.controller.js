const models = require('../models/index') 

function insertKategori(req, res) {
    let form = req.body
    models.kategori.create(form)

    return res.send({ message: 'Data has been created', data: form })
}

async function listKategori(req, res) {
    const result = await models.kategori.findAll()
    if (result.length < 1) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

async function detailKategori(req, res) {
    const result = await models.kategori.findOne({ where: { id: req.params.id } })
    if (!result) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

function updateKategori(req, res) {
    let data = req.body
    models.kategori.update(data, { where: { id: req.params.id } })
    
    return res.send({ message: 'Data has been updated', data: req.body })
}

function deleteKategori(req, res) {
    models.kategori.destroy({ where: { id: req.params.id } })
    return res.send({ message: 'Data has been deleted' })
}


function insertProduct(req, res) {
    let form = req.body
    models.product.create(form)

    return res.send({ message: 'Data has been created', data: form })
}

async function listProduct(req, res) {
    const result = await models.product.findAll()
    if (result.length < 1) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

async function detailProduct(req, res) {
    const result = await models.product.findOne({ where: { id: req.params.id } })
    if (!result) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

function updateProduct(req, res) {
    let data = req.body
    models.product.update(data, { where: { id: req.params.id } })
    
    return res.send({ message: 'Data has been updated', data: req.body })
}

function deleteProduct(req, res) {
    models.product.destroy({ where: { id: req.params.id } })
    return res.send({ message: 'Data has been deleted' })
}





function insertPrice(req, res) {
    let form = req.body
    models.price.create(form)

    return res.send({ message: 'Data has been created', data: form })
}

async function listPrice(req, res) {
    const result = await models.price.findAll()
    if (result.length < 1) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

async function detailPrice(req, res) {
    const result = await models.price.findOne({ where: { id: req.params.id } })
    if (!result) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

function updatePrice(req, res) {
    let data = req.body
    models.price.update(data, { where: { id: req.params.id } })
    
    return res.send({ message: 'Data has been updated', data: req.body })
}

function deletePrice(req, res) {
    models.price.destroy({ where: { id: req.params.id } })
    return res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertKategori,
    listKategori,
    detailKategori,
    updateKategori,
    deleteKategori,
    insertProduct,
    listProduct,
    detailProduct,
    updateProduct,
    deleteProduct,
    insertPrice,
    listPrice,
    detailPrice,
    updatePrice,
    deletePrice

}