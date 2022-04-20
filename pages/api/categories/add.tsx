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
	const { name, status } = req.body;
	let check = await Category.find({ name: name });
	if (check.length === 0) {
		let category = await new Category({
			name,
			status
		}).save();
		res.status(200).json(category);
	} else {
		res.status(200).json({ error: 'Category already exist' });
	}
};

export default handler;
