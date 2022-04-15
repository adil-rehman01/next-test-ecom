import Head from 'next/head';
import React, { useState } from 'react';

const AddCategory = () => {
	const [name, setName] = useState('');

	const submitCategory = (e) => {
		e.preventDefault();
		const res = fetch(`http://localhost:3000/api/categories/add`, {
			method: 'POST',
			body: JSON.stringify({ name: name })
		}).then((response) => response.json());
		console.log(res);
	};

	return (
		<div>
			<Head>
				<title>Add Category</title>
			</Head>
			<div className='sm:px-6 w-full'>
				<div className='px-4 py-4 md:py-7'>
					<div className='flex items-center justify-between'>
						<p className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800'>Add Category</p>
					</div>
				</div>
				<form className='py-8 px-4' onSubmit={(e) => submitCategory(e)}>
					<div className='grid grid-cols-2 gap-4 flex-col items-center'>
						<div className='flex flex-col md:mr-16 w-full'>
							<label htmlFor='email' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
								Name
							</label>
							<input
								id='name'
								className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border w-full'
								placeholder='Name'
								onChange={(e) => setName(e.target.value)}
								value={name}
							/>
						</div>
					</div>

					<div className='w-full pt-4'>
						<button className='bg-indigo-700 text-white px-2 py-1 rounded'>Save</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddCategory;
