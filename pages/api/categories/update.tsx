import { NextApiRequest, NextApiResponse } from 'next';
import Category from '../../../models/Category';
import InitDB from '../../../helpers/initDB';
import Cors from 'cors';

InitDB();

const cors = Cors({
	methods: ['POST']
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
	const { id, name, status } = req.body;
	let check = await Category.updateOne({ _id: id }, { name, status });
	res.status(200).json({ category: check });
};

export default handler;
