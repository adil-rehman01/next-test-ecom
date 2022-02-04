import mongoose from 'mongoose'
import React from 'react'

const UsersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        enum: ['Admin','User'],
        default: 'User'
    },
    status: {
        type: Number,
        default: 0,
    },
    created_time: {
        type: Number,
        default: 0,
    }
})

export default mongoose.models.user || mongoose.model('user', UsersSchema)
