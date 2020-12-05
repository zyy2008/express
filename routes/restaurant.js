'use strict';

import express from 'express';
import Restaurant from '../controller/restaurant/restaurant'

const router = express.Router();

router.get('/get', Restaurant.getRestaurants);
router.post('/add', Restaurant.addRestaurants);

export default router