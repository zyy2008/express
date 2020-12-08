'use strict';

import RestaurantModel from '../../models/restaurant/restaurant'
import formidable from 'formidable'
var common = require('../../middlewares/common')

class Restaurant {
    constructor() {
        this.getRestaurants = this.getRestaurants.bind(this);
        this.addRestaurants = this.addRestaurants.bind(this);
    }
    async getRestaurants(req, res, next) {
        try {
            const allRestaurant = await RestaurantModel.find()
            res.send({
                status: 'ok',
                data: allRestaurant,
            })
        } catch (err) {
            res.send({
                status: 0,
                type: 'ERROR_GET_LIST',
                message: 'err'
            })
        }
    }
    //add
    async addRestaurants(req, res, next) {
        const form = new formidable.IncomingForm();
        const token = req.headers['token']
        form.parse(req, (err, fields, files) => {
            common.verifytoken(token).then(async data => {
                if (data) {
                    try {
                        const {
                            _id
                        } = data
                        let copy = Object.assign({}, fields)
                        copy.user_id = _id
                        const restaurant = new RestaurantModel(copy);
                        await restaurant.save();
                        res.send({
                            status: 'ok',
                            sussess: 'success',
                            message: "add success"
                        })
                    } catch (err) {
                        res.send({
                            status: 0,
                            type: 'err',
                            message: 'add err',
                        })
                    }

                } else {
                    res.send({
                        status: 0,
                        type: 'err',
                        message: 'add err',
                    })
                }
            })
        })
    }
    async updRestaurants(req, res, next) {
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            const {
                _id
            } = fields
            const copy = Object.assign({}, fields)
            delete copy._id
            try {
                await RestaurantModel.findOneAndUpdate({
                    _id
                }, {
                    $set: copy
                });
                res.send({
                    status: 'ok',
                    sussess: 'success',
                    message: "update success"
                })
            } catch (err) {
                res.send({
                    status: 0,
                    type: 'err',
                    message: 'update err',
                })
            }
        })
    }
    async deleteResturant(req, res, next) {
        const restaurant_id = req.params.id;
        try {
            await RestaurantModel.remove({
                _id: restaurant_id
            });
            res.send({
                status: 'ok',
                success: 'delete success',
            })
        } catch (err) {
            res.send({
                status: 0,
                type: 'DELETE_RESTURANT_FAILED',
                message: 'delete err',
            })
        }
    }
}

export default new Restaurant()