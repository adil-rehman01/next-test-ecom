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
					{/* Code block starts */}
					<div className='flex flex-col md:mr-16 w-full'>
						<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Name
						</label>
						<input id='name' className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border w-full' placeholder='Name' />
					</div>
					{/* Code block ends */}
					{/* Code block starts */}
					<div className='flex flex-col md:mr-16 w-full'>
						<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Quantity
						</label>
						<input id='name' className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border w-full' placeholder='Quantity' />
					</div>
					{/* Code block ends */}
					{/* Code block starts */}
					<div className='flex flex-col md:mr-16 w-full'>
						<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Name
						</label>
						<input id='name' className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border w-full' placeholder='Name' />
					</div>
					{/* Code block ends */}
				</div>
			</div>
		</>
	);
};

export default AddProduct;
