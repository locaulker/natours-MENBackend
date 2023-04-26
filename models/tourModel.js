const mongoose = require('mongoose');

// Basic Schema
const tourSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: 'number',
    default: 4.5,
  },
  price: {
    type: 'number',
    required: [true, 'A tour must have a price'],
  },
});

// Basic Model
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
