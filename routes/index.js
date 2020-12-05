'use strict';

import admin from './admin'
import restaurant from './restaurant'

function checkToken(req, res) {

	res.sendStatus(200)
}

export default app => {
	app.use('/user', admin);
	app.use('/restaurant', restaurant);
}