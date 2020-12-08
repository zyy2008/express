'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    user_id: {
        type: String,
        default: ""
    },
    rest_id: {
        type: String,
        default: ""
    },
    score: {
        type: Number,
        default: 0
    }
})

const scoringModel = mongoose.model('Scoring', scoreSchema, 'scoring');

export default scoringModel