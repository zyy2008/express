'use strict';

import express from 'express';
import Scoring from '../controller/scoring/scoring'

const router = express.Router();

router.get('/get', Scoring.getScoring);
router.post('/add', Scoring.addScoring);

export default router