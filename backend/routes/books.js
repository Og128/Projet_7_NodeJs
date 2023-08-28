const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const bookCtrl = require('../controllers/books')

router.get('/', bookCtrl.getAllBooks)
router.get('/bestrating', bookCtrl.bestRating)
router.get('/:id', bookCtrl.getOneBook)
router.put('/:id', auth, multer, bookCtrl.modifyBook)
router.post('/', auth, multer, bookCtrl.createBook)
router.delete('/:id', auth, bookCtrl.deleteBook)
router.post('/:id/rating', auth, multer, bookCtrl.addRating)


module.exports = router;