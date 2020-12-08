'use strict';

import ScoringModel from '../../models/scoring/scoring'
import formidable from 'formidable'
var common = require('../../middlewares/common')

class Scoring {
    constructor() {
        this.getScoring = this.getScoring.bind(this);
        this.addScoring = this.addScoring.bind(this);
    }
    async getScoring(req, res, next) {
        try {
            const all = await ScoringModel.find()
            res.send({
                status: 'ok',
                data: all,
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
    async addScoring(req, res, next) {
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
                        const restaurant = new ScoringModel(copy);
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
}

export default new Scoring()