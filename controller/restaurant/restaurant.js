'use strict';

import RestaurantModel from '../../models/restaurant/restaurant'

class Restaurant {
    constructor() {
        this.getRestaurants = this.getRestaurants.bind(this);
    }
    async getRestaurants(req, res, next) {
        if (req.token) {
            const {
                limit = 20, offset = 0
            } = req.query;
            try {
                const allRestaurant = await RestaurantModel.find({}, '-_id').sort({
                    id: -1
                }).skip(Number(offset)).limit(Number(limit))
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
        } else {
            res.send({
                status: 0,
                type: 'ERROR_GET_LIST',
                message: 'err'
            })
        }

    }
}

export default new Restaurant()