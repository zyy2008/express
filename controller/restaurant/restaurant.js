'use strict';

import RestaurantModel from '../../models/restaurant/restaurant'
import formidable from 'formidable'

class Restaurant {
    constructor() {
        this.getRestaurants = this.getRestaurants.bind(this);
        this.addRestaurants = this.addRestaurants.bind(this);
    }
    async getRestaurants(req, res, next) {
        try {
            const allRestaurant = await RestaurantModel.find({}, '-_id').sort({
                "_id": 1
            })
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
        form.parse(req, async (err, fields, files) => {
            try {
                if (!fields.name) {
                    throw new Error('必须填写商店名称');
                } else if (!fields.address) {
                    throw new Error('必须填写商店地址');
                } else if (!fields.phone) {
                    throw new Error('必须填写联系电话');
                } else if (!fields.latitude || !fields.longitude) {
                    throw new Error('商店位置信息错误');
                } else if (!fields.image_path) {
                    throw new Error('必须上传商铺图片');
                } else if (!fields.category) {
                    throw new Error('必须上传食品种类');
                }
            } catch (err) {
                res.send({
                    status: 0,
                    type: 'ERROR_PARAMS',
                    message: err.message
                })
                return
            }
            try {
                const restaurant = new RestaurantModel(newShop);
                await restaurant.save();
                res.send({
                    status: 1,
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
        })
    }
}

export default new Restaurant()