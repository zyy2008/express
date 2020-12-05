'use strict';

import formidable from 'formidable'
import userModel from '../../models/admin/user'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

class User {
	constructor() {
		this.login = this.login.bind(this);
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
					throw new Error('用户名参数错误');
				} else if (!password) {
					throw new Error('密码参数错误');
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
					console.log('用户登录密码错误')
					res.send({
						status: 0,
						type: 'ERROR_PASSWORD',
						message: 'wrong password',
					})
					return
				} else {
					const token = 'Bearer ' + jwt.sign({
							_id: user._id
						},
						'secret12345', {
							expiresIn: 3600 * 24 * 3
						}
					)
					res.json({
						status: 'ok',
						data: {
							token: token
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
}

export default new User()