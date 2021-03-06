var express = require('express')
var router = express.Router()

const companyController = require("./controllers/company.controllers");
const authController = require("../user/controllers/auth.controller");


router.post('/', authController.protect , companyController.createCompany );

router.get('/', authController.protect , companyController.sendNewCompanyForm );


module.exports = router;