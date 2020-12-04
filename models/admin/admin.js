'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	username: String,
	password: String
})

adminSchema.index({
	id: 1
});

const Admin = mongoose.model('User', adminSchema);


export default Admin