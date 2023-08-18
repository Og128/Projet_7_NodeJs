const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const bookCtrl = require('../controllers/books')

router.get('/', auth, bookCtrl.getAllBooks)
router.get('/:id', auth, bookCtrl.getOneBook)
router.put('/:id', auth, multer, bookCtrl.modifyBook)
router.post('/', auth, multer, bookCtrl.createBook)
router.delete('/:id', auth, bookCtrl.deleteBook)

module.exports = router;