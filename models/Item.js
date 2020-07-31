const mongoose = require('mongoose');

const { Schema } = mongoose;
const config = require('config');

// Database config
const URI = config.get('mongoURI');

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.error(err));

const ItemSchema = new Schema({
  moveId: Number,
  id: Number,
  name: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = {
  Item,
};
