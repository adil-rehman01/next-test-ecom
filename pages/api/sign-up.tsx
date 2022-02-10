import type { NextApiRequest, NextApiResponse } from 'next'
import InitDB from '../../helpers/initDB'
import User from '../../models/User'
import bcrypt from "bcryptjs"
type Data = {
    data: any
}

InitDB()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        let hashedPassword = await bcrypt.hash(req.body.password, 12)
        const user = await new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hashedPassword,
            role: 'User',
            status: 1,
        }).save()
        
        return res.status(201).json({
            data: 'Sign-up successfully'
        })
    } catch (error) {
        return res.status(200).json({ data: error })
    }
}
