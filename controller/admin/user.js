'use strict';

import formidable from 'formidable'
import userModel from '../../models/admin/user'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

class User {
	constructor() {
		this.login = this.login.bind(this);
		this.addUser = this.addUser.bind(this);
	}
	async login(req, res, next) {
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			const {
				username,
				password
			} = fields;
			try {
				if (!username) {
					throw new Error('The username parameter error');
				}
			} catch (err) {
				res.send({
					status: 0,
					type: 'ERROR_QUERY',
					message: err.message,
				})
				return
			}
			try {
				const user = await userModel.findOne({
					username
				});
				if (user.password.toString() !== password.toString()) {
					res.send({
						status: 0,
						type: 'ERROR_PASSWORD',
						message: 'wrong password',
					})
					return
				} else {
					const token = jwt.sign({
							_id: user._id
						},
						'secret12345', {
							expiresIn: 3600 * 24 * 3
						}
					)
					res.json({
						status: 'ok',
						data: {
							token: token,
							userId: user._id
						}
					})
				}
			} catch (err) {
				res.send({
					status: 0,
					type: 'SAVE_USER_FAILED',
					message: 'User login failed',
				})
			}
		})
	}
	async addUser(req, res, next) {
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			if (err) {
				res.send({
					status: 0,
					type: 'FORM_DATA_ERROR',
					message: 'Form information error'
				})
				return
			} else {
				const {
					username,
					password
				} = fields;
				const admin = await userModel.findOne({
					username
				})
				if (admin) {
					res.send({
						status: 0,
						type: 'USER_ERR',
						message: 'The user already exists',
					})
				} else {
					const newAdmin = {
						username,
						password,
					}
					await userModel.create(newAdmin)
					res.send({
						status: 'ok',
						message: 'registration success',
					})
				}
			}

		})

	}
}

export default new User()