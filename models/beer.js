const mongoose = require('mongoose');

// create new schema for beers
const beerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Cannot be left blank'
    },
    category: String,
    description: String,
    abv: Number
});

// create new beer model
const Beer = mongoose.model('Beer', beerSchema);

// export beer model
module.exports = Beer;