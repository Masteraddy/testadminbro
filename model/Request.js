const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  serial: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'service',
    required: true,
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  property: {
    type: String,
    required: true,
  },
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'property',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
  timestart: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: Number,
    default: 0,
  },
  assigned: {
    type: String,
    default: 'Unassigned',
  },
  assignedId: {
    type: String,
    default: 'Unassigned',
  },
  priority: {
    type: String,
    default: 'Unassigned',
  },
  actual: {
    type: Number,
    default: 0,
  },
  fixed: {
    type: Number,
    default: 0,
  },
  timecompleted: {
    type: Date,
  },
  timescheduled: {
    type: Date,
  },
  comments: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
      text: { type: String },
    },
  ],
});

const Request = mongoose.model('request', RequestSchema);

module.exports = Request;
