import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    data: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ data: req.body })
}
