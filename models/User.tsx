import mongoose from 'mongoose'

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
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    },
    status: {
        type: Number,
        default: 0,
    },
    remember_token: {
        type: String,
        default: null,
    },
    created_time: {
        type: Number,
        default: 0,
    }
})

export default mongoose.models.user || mongoose.model('user', UsersSchema)
