'use strict';

import express from 'express';
import Restaurant from '../controller/restaurant/restaurant'

const router = express.Router();

router.get('/get', Restaurant.getRestaurants);
router.post('/add', Restaurant.addRestaurants);
router.post('/upd', Restaurant.updRestaurants);
router.delete('/del/:id', Restaurant.deleteResturant);

export default router