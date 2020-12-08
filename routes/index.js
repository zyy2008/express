'use strict';

import admin from './admin'
import restaurant from './restaurant'
import scoring from './scoring'

var authtoken = require('./../middlewares/authtoken')

export default app => {
	app.use('/user', admin);
	app.use('/restaurant', authtoken, restaurant);
	app.use('/scoring', authtoken, scoring);
}