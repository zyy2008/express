'use strict';

import admin from './admin'
import restaurant from './restaurant'

var authtoken = require('./../middlewares/authtoken')

export default app => {
	app.use('/user', admin);
	app.use('/restaurant', authtoken, restaurant);
}