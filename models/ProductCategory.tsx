import { model, models, Schema } from 'mongoose';

const ProductCategoriesSchema = new Schema({
	category_id: {
		type: Number,
		required: true
	},
	product_id: {
		type: Number,
		required: true
	}
});

export default models.productCategory || model('productCategory', ProductCategoriesSchema);
