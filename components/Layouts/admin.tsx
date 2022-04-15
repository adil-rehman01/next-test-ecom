import Link from 'next/link';
import React from 'react';
import NavBar from '../dashboard/nav-bar';
import Sidebar from '../dashboard/Sidebar';

const Admin = ({ children }: any) => {
	let baseLink = '/dashboard';

	return (
		<div className='flex flex-no-wrap'>
			{/* Sidebar starts */}
			<Sidebar />
			{/* Sidebar ends */}
			{/* Remove class [ h-64 ] when adding a card block */}
			<div className='w-full'>
				{/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
				<NavBar />
				<div className='py-10 h-64 w-full px-6'>
					<div className='w-full rounded border-dashed border-2 border-gray-300' style={{ minHeight: '200px' }}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
