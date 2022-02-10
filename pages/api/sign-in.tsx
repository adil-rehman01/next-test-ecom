import type { NextApiRequest, NextApiResponse } from 'next'
import InitDB from '../../helpers/initDB'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from '../../models/User'

InitDB()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const {email} = req.body

        const user: any = await User.findOne({ email: email })
        let compare = await bcrypt.compare(req.body.password,user.password)
        if (!compare)
        {
            return res.status(201).json({ error: 'Credentials are in-valid! Please enter correct email and password.' })
        }
        else
        {
            let token: any = await jwt.sign({ user: user }, 'z5n8YCGETbd4ChxvnDmVRt2MJ9zC8hrv8oPVGHOg', {
                expiresIn: "7d"
            })
            return res.status(201).json({ token: token })
        }
    } catch (error) {
        return res.status(200).json({ data: error })
    }
}