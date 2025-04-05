const express = require('express');
const router = express.Router();

const pandemiasController = require('../controllers/pandemiasController');

router.get('/', pandemiasController.get_pandemia);
router.get('/:id', pandemiasController.get_pandemia_id);


module.exports = router;