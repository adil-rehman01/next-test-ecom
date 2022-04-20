import Head from 'next/head';
import React, { useState } from 'react';

const CategoriesList = ({ categories }: any) => {
	const [show, setShow]: any = useState(null);
	const popuphandler = (bool: any) => {};
	return (
		<>
			<div className='sm:px-6 w-full'>
				<div className='px-4 md:px-4 py-4 md:py-7'>
					<div className='flex items-center justify-between'>
						<p className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800'>Categories</p>
						<div className='py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded'>
							<p>Sort By:</p>
							<select className='focus:outline-none bg-transparent ml-1'>
								<option className='text-sm text-indigo-800'>Latest</option>
								<option className='text-sm text-indigo-800'>Oldest</option>
								<option className='text-sm text-indigo-800'>Latest</option>
							</select>
						</div>
					</div>
				</div>
				<div className='bg-white py-4 px-4'>
					{/* Category Listing */}
					<div className='overflow-x-auto'>
						<table className='w-full whitespace-nowrap'>
							<thead>
								<tr>
									<th className='text-left'>Sr #</th>
									<th className='text-left'>Name</th>
									<th className='text-left'>Status</th>
									<th className='text-left'>Action</th>
								</tr>
							</thead>
							<tbody>
								{categories.map((category: any, index: any) => {
									return (
										<tr key={index} className='h-16 border border-gray-100 rounded'>
											<td>
												<div>{index + 1}</div>
											</td>
											<td className=''>
												<p className='text-base font-medium leading-none text-gray-700 mr-2'>{category.name}</p>
											</td>
											<td>
												{category.status == 'Y' ? (
													<button className='py-3 px-3 text-sm focus:outline-none leading-none text-blue-500 bg-blue-100 hover:bg-blue-200 rounded'>Active</button>
												) : (
													<button className='py-3 px-3 text-sm focus:outline-none leading-none text-red-500 bg-red-100 hover:bg-red-200 rounded'>In-active</button>
												)}
											</td>
											<td>
												<div className='relative px-5 pt-2'>
													<button
														className='focus:outline-none'
														onClick={() => {
															show == null ? setShow(null) : setShow(index);
														}}
													>
														<svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 20 20' fill='none'>
															<path
																d='M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z'
																stroke='#9CA3AF'
																strokeWidth='1.25'
																strokeLinecap='round'
																strokeLinejoin='round'
															/>
															<path
																d='M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z'
																stroke='#9CA3AF'
																strokeWidth='1.25'
																strokeLinecap='round'
																strokeLinejoin='round'
															/>
															<path
																d='M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z'
																stroke='#9CA3AF'
																strokeWidth='1.25'
																strokeLinecap='round'
																strokeLinejoin='round'
															/>
														</svg>
													</button>
													{show == index && (
														<div className='dropdown-content bg-white shadow absolute z-30 left-0 mr-6 '>
															<div className='text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white'>
																<p>Edit</p>
															</div>
															<div className='text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white'>
																<p>Delete</p>
															</div>
														</div>
													)}
												</div>
											</td>
										</tr>
									);
								})}
								<tr className='h-3' />
								<tr className='h-3' />
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<style>
				{` .checkbox:checked + .check-icon {
                    display: flex;
                }`}
			</style>
		</>
	);
};

export default CategoriesList;
