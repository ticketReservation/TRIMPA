
const { getAll, deleteOne , addOne ,updateOne, getOne} = require('../controller/SitController');
const express = require('express')

const router = express.Router()

// Define your routes here
router.get('/', getAll);
router.get('/:name', getOne);
router.post('/',addOne)
router.put('/:name',updateOne)
router.delete('/:id', deleteOne);
router.get('/', getAll)

module.exports = router
