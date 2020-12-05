'use strict';

import express from 'express';
import Restaurant from '../controller/restaurant/restaurant'

const router = express.Router();

router.get('/getRestaurants', Restaurant.getRestaurants);

export default router