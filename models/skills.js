'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  SkillsSchema = new Schema({
    section: {
      type: String
    },
    items: [{
      name: {
        type: String
      },
      value: {
        type: Number,
        default: 0
      }
    }]
  });

mongoose.model('skills', SkillsSchema);
