import mongoose from 'mongoose'
import React from 'react'

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    status: {
        type: Number,
        default: 0,
    }

})

export default mongoose.models.product || mongoose.model('product', ProductsSchema)
