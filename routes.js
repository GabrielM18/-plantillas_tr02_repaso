const express = require('express')
const router  = express.Router()

const fNoches = require('./razas.functions')

router.use('/crear_noches', fNoches.get_noches)

module.exports = router;