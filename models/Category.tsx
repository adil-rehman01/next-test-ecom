import { model, models, Schema } from 'mongoose';

const CategoriesSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	subcategories: {
		type: Object,
		default: {}
	},
	status: {
		type: String,
		default: 'Y'
	}
});

export default models.category || model('category', CategoriesSchema);
