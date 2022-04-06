import React from 'react';

const RightToLeftBoxEffect = ({ children }: any) => {
	return (
		<div className='drop-link relative cursor-pointer text-sm leading-3 tracking-normal text-black focus:outline-none'>
			<div className='flex items-center p-2'>{children}</div>
			<div className='drop-link-hover-wrapper absolute bg-indigo-700 h-full text-white top-0 overflow-hidden'>
				<div className='hover-effect-content flex items-center'>{children}</div>
			</div>
		</div>
	);
};

export default RightToLeftBoxEffect;
