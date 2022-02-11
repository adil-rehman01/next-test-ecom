import type { NextApiRequest, NextApiResponse } from 'next'
import InitDB from '../../helpers/initDB'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from '../../models/User'
import Cors from "cors"
import { JWT_SECRET_ENV } from '../../helpers/constants'

const cors = Cors({
    methods: ['GET', 'HEAD'],
})

InitDB()

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

async function handler( req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, cors)
    try {
        const {email} = req.body
        const user: any = await User.findOne({ email: email })
        let compare = await bcrypt.compare(req.body.password,user.password)
        if (!compare)
        {
            return res.status(200).json({ error: 'Credentials are in-valid! Please enter correct email and password.' })
        }
        else
        {
            let token: any = await jwt.sign({ user: user }, JWT_SECRET_ENV, {
                expiresIn: "7d"
            })
            return res.status(200).json({ token: token })
        }
    } catch (error) {
        return res.status(200).json({ data: error })
    }
}

export default handler