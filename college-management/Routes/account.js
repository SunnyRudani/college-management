const express = require("express");
const router = express.Router();

const accountController = require("../Controllers/AccountController");

router.post('/login', (req, res) => accountController.account.login(req, res))

router.post('/register', (req, res) => accountController.account.register(req, res))

router.post('/activateAccount', (req, res) => accountController.account.activateAccount(req, res))

router.post('/forgetPassword', (req, res) => accountController.account.forgetPassword(req, res))

router.post('/verifyOtpCode', (req, res) => accountController.account.verifyOtpCode(req, res))

router.post('/changePassword', (req, res) => accountController.account.changePassword(req, res))

module.exports = router;