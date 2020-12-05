'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const restSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    borough: {
        type: String,
        default: ""
    },
    cuisine: {
        type: String,
        default: ""
    },
    photo: {
        type: String,
        default: ""
    },
    photo_mimetype: {
        type: String,
        default: ""
    },
    street: {
        type: String,
        default: ""
    },
    building: {
        type: String,
        default: ""
    },
    zipcode: {
        type: String,
        default: ""
    },
    grades: {
        type: Number,
        default: 0
    },
    owner: {
        type: String,
        default: ""
    },

})

restSchema.index({
    id: 1
});

const restaurantModel = mongoose.model('Restaurant', restSchema, 'restaurant');

export default restaurantModel