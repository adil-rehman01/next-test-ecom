import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { APP_URL } from '../../../helpers/constants';

const AddCategory = ({ category, setCategory, setCategoriesList }: any) => {
	const [name, setName] = useState('');
	const [status, setStatus] = useState('N');

	const submitCategory = async (e: any) => {
		e.preventDefault();
		if (category._id === undefined) {
			await fetch(`${APP_URL}/api/categories/add`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name: name, status: status })
			}).then((response) => response.json());
		} else {
			await fetch(`${APP_URL}/api/categories/update`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ id: category._id, name: name, status: status })
			}).then((response) => response.json());
			setCategory({});
		}

		let categories = await fetch(`${APP_URL}/api/categories`).then((response) => response.json());
		setCategoriesList(categories);
	};

	useEffect(() => {
		setName(category.name !== undefined ? category.name : '');
		setStatus(category.status !== undefined ? category.status : 'N');
	}, [category]);

	return (
		<div className='sm:px-6 w-full'>
			<div className='p-4 md:py-7'>
				<div className='flex items-center justify-between'>
					<p className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800'>Add Category</p>
				</div>
			</div>
			<form className='p-4' onSubmit={(e) => submitCategory(e)}>
				<div className='grid grid-cols-2 gap-4 flex-col items-center'>
					<div className='flex flex-col md:mr-16 w-full'>
						<label htmlFor='name' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
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
					<div className='flex flex-col md:mr-16 w-full'>
						<label htmlFor='name' className='text-black text-sm font-bold leading-tight tracking-normal mb-2'>
							Status
						</label>
						<div>
							<label htmlFor='status'>
								<input
									type='checkbox'
									name='status'
									id='status'
									value={status}
									checked={status == 'Y' ? true : false}
									onChange={() => {
										status == 'Y' ? setStatus('N') : setStatus('Y');
									}}
								/>{' '}
								Active
							</label>
						</div>
					</div>
				</div>
				<div className='w-full pt-4'>
					<button className='bg-indigo-700 text-white px-2 py-1 rounded'>{category._id === undefined ? 'Save' : 'Update'}</button>
				</div>
			</form>
		</div>
	);
};

export default AddCategory;
