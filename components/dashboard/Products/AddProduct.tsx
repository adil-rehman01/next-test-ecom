import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const AddProduct = ({ categories }: any) => {
	let productFormInitialState = {
		name: '',
		quantity: '',
		category: 0,
		description: ''
	};
	const [productForm, setProductForm] = useState(productFormInitialState);
	const [selectedCategories, setSelectedCategories] = useState<any>([]);
	const [image, setImage] = useState<any>(null);

	const addCategories = (id: any) => {
		setSelectedCategories([...selectedCategories, id]);
	};

	const removeCategory = async (id: any) => {
		let appliedCategories = selectedCategories.filter((cat_id: any) => cat_id !== id);
		await setSelectedCategories(appliedCategories);
	};

	const uploadImage = (e: any) => {
		setImage(e.target.files[0]);
	};

	useEffect(() => {}, [selectedCategories]);

	return (
		<>
			<Head>
				<title>Add Product</title>
			</Head>
			<div className='sm:px-6 w-full'>
				<div className='px-4 py-4 md:py-7'>
					<div className='flex items-center justify-between'>
						<p className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800'>Add Product</p>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-4 flex-col items-center py-8 px-4'>
					<div className='flex flex-col md:mr-16 w-full'>
						<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Name
						</label>
						<input
							id='name'
							className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border w-full'
							placeholder='Name'
							value={productForm.name}
							onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
						/>
					</div>

					<div className='flex flex-col md:mr-16 w-full'>
						<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Quantity
						</label>
						<input
							id='name'
							className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border w-full'
							placeholder='Quantity'
							value={productForm.quantity}
							onChange={(e) => setProductForm({ ...productForm, quantity: e.target.value })}
						/>
					</div>

					<div className='flex flex-col md:mr-16 w-full'>
						<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Categories
						</label>
						<div className='flex flex-wrap'>
							{categories.map((category: any, index: any) => {
								let selected = selectedCategories.filter((cat: any) => cat === category._id);
								return (
									<div
										key={index}
										className={`text-sm ${selected.length > 0 ? 'text-white bg-indigo-700' : 'text-indigo-700'} w-max py-1 px-2 m-2 rounded border border-indigo-700 cursor-pointer`}
										onClick={() => (selected.length == 0 ? addCategories(category._id) : removeCategory(category._id))}
									>
										{category.name}
									</div>
								);
							})}
						</div>
					</div>

					<div className='flex flex-col md:mr-16 w-full col-span-2'>
						<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Description
						</label>
						<textarea
							id='name'
							rows={10}
							className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal flex items-center p-3 text-sm border-gray-300 rounded border w-full'
							placeholder='Description . . .'
							value={productForm.description}
							onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
						></textarea>
					</div>

					<div className='flex flex-col md:mr-16 w-full col-span-2'>
						<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Upload Images
						</label>
						<label htmlFor='image' className='w-52 h-52'>
							<div className='border border-dashed bg-blue-50 border-blue-500 flex flex-wrap w-52 h-52 justify-center items-center rounded cursor-pointer relative'>
								<div className='text-blue-600 font-medium'>Upload Image</div>
								{image != null && <Image src={URL.createObjectURL(image)} layout='fill' className='object-cover' />}
							</div>
							<input type='file' name='image' id='image' className='hidden' onChange={(e) => uploadImage(e)} />
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddProduct;
