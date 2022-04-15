import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../../models/Product';
import InitDB from '../../../helpers/initDB';
import Cors from 'cors';

InitDB();

const cors = Cors({
	methods: ['GET', 'HEAD']
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result: any) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await runMiddleware(req, res, cors);
	// Product.find().then((products) => {
	// 	res.status(200).json(req.body);
	// });
	res.status(200).json(req.body);
};

export default handler;
