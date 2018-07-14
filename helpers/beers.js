const db = require('../models');

exports.getBeers = (req, res) => {
    db.Beer.find()
    .then(beers => {
        res.json(beers);
    })
    .catch(err => {
        res.send(err);
    })
}

exports.createBeer = (req, res) => {
    db.Beer.create(req.body)
    .then(newBeer => {
        res.status(201).json(newBeer);
    })
    .catch(err => {
        res.send(err);
    })
}

exports.getBeer = (req, res) => {
    db.Beer.findById(req.params.beerId)
    .then(foundBeer => {
        res.json(foundBeer);
    })
    .catch(err => {
        res.send(err);
    })
}

exports.updateBeer = (req, res) => {
    db.Beer.findOneAndUpdate({_id: req.params.beerId}, req.body, {new: true})
    .then(beer => {
        res.json(beer);
    })
    .catch(err => {
        res.send(err);
    })
}

exports.deleteBeer = (req, res) => {
    db.Beer.remove({_id: req.params.beerId})
    .then(() => {
        res.json({ message: 'This beer has been removed' });
    })
    .catch(err => {
        res.send(err);
    })
}

module.exports = exports;