const express = require("express");
const router = express.Router();

const userController = require("../Controllers/UserController");

router.get('/get', (req, res) => userController.user.get(req, res))
router.post('/add', (req, res) => userController.user.add(req, res))
// router.post('/update', (req, res) => userController.user.update(req, res))
router.delete('/delete', (req, res) => userController.user.delete(req, res))
router.get('/getById', (req, res) => userController.user.getById(req, res))


module.exports = router