const { Schema, model, Types } = require('mongoose');
const ThoughtSchema = new Schema(
    username: {
        type: String,
        required: true,
      },
    thoughtBody: {
      type: String,
      required: 'Whats on your mind?',
      minlength: 1,
      maxlength: 360
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => date(createdAtVal).format('MM/DD/YYYY [at] hh:mm')
    },

{
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  });

  const Thought = model('Thought', ThoughtSchema);
  
  module.exports = Thought;