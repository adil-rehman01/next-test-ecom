import Head from 'next/head';
import React from 'react';
import AddCategory from '../../../components/dashboard/Categories/AddCategory';
import CategoriesList from '../../../components/dashboard/Categories/CategoriesList';
import { APP_URL } from '../../../helpers/constants';

const Categories = ({ categories }: any) => {
	return (
		<>
			<Head>
				<title>Categories</title>
			</Head>
			<AddCategory />
			<CategoriesList categories={categories} />
		</>
	);
};

export default Categories;

export const getServerSideProps = async (context: any) => {
	let categories = await fetch(`${APP_URL}/api/categories`).then((response) => response.json());
	console.log(categories);
	return {
		props: {
			categories
		}
	};
};
