var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET home page. */
router.get('/about', indexController.displayAboutPage);

/* GET home page. */
router.get('/products', indexController.displayProductsPage);

/* GET home page. */
router.get('/services', indexController.displayServicesPage);

/* GET home page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
