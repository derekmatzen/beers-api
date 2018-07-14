const express = require('express');
const router = express.Router();
const db = require('../models');
const helpers = require('../helpers/beers');

router.route('/')
    .get(helpers.getBeers)
    .post(helpers.createBeer)

router.route('/:beerId')
    .get(helpers.getBeer)
    .put(helpers.updateBeer)
    .delete(helpers.deleteBeer)

module.exports = router;