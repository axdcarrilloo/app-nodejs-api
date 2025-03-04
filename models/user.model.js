
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {
      type: String,
      required: false
    },
    numberCC: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    userName: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
