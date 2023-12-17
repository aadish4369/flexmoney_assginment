const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  }
  // Add other batch details as needed
});

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;
