const express = require('express')
const { ensureAuthorized } = require('../middleware/auth')
const router = express.Router()

const accountRoutes = require('./account')
const userRoutes = require('./User')


router.use('/account', accountRoutes)
router.use('/user', userRoutes)

module.exports = router