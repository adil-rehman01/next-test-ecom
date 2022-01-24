import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";
import InitDB from "../../../helpers/initDB";

InitDB()

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    Product.find().then(products=> {
        res.status(200).json(products)
    })
}

export default handler;