import Category from '../../models/Category';
import InitDB from '../../helpers/initDB';
import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

InitDB();

const cors = Cors({
	methods: ['GET']
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

export default async (req: NextApiRequest, res: NextApiResponse) => {
	await runMiddleware(req, res, cors);
	switch (req.method) {
		case 'GET':
			await getCategories(req, res);
			break;
	}
};

const getCategories = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const categories = await Category.find();
		res.status(200).json(categories);
	} catch (error) {
		console.log(error);
	}
};
