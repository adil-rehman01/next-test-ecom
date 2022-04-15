import Head from 'next/head';
import React from 'react';

const AddProduct = () => {
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
						<input id='name' className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border w-full' placeholder='Name' />
					</div>

					<div className='flex flex-col md:mr-16 w-full'>
						<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Quantity
						</label>
						<input id='name' className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border w-full' placeholder='Quantity' />
					</div>

					<div className='flex flex-col md:mr-16 w-full'>
						<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Category
						</label>
						<select id='name' className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border w-full' placeholder='Quantity'>
							<option value=''>Select Category</option>
						</select>
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
						></textarea>
					</div>

					<div className='flex flex-col md:mr-16 w-full col-span-2'>
						<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Upload Images
						</label>
						<label htmlFor='image' className='w-52 h-52'>
							<div className='border border-dashed bg-blue-50 border-blue-500 flex flex-wrap w-52 h-52 justify-center items-center rounded cursor-pointer'>
								<div className='text-blue-600 font-medium'>Upload Image</div>
							</div>
							<input type='file' name='image' id='image' className='hidden' />
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddProduct;
