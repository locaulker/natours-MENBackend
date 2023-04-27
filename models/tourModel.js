const mongoose = require('mongoose');

// Basic Schema
const tourSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a maximum group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  ratingsAverage: {
    type: 'number',
    default: 4.5,
  },
  ratingsQuantity: {
    type: 'number',
    default: 0,
  },
  price: {
    type: 'number',
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  summary: {
    type: 'string',
    trim: true,
    required: [true, 'A tour must have a description'],
  },
  description: {
    type: 'string',
    trim: true,
  },
  imageCover: {
    type: 'string',
    required: [true, 'A tour must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

// Basic Model
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
