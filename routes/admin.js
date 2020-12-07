'use strict';

import express from 'express'

import User from '../controller/admin/user'

const router = express.Router()

router.post('/login', User.login);
router.post('/add', User.addUser);

export default router