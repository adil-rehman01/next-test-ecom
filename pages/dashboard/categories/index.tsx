import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import AddCategory from '../../../components/dashboard/Categories/AddCategory';
import CategoriesList from '../../../components/dashboard/Categories/CategoriesList';
import { APP_URL } from '../../../helpers/constants';

const Categories = ({ categories }: any) => {
	const [category, setCategory] = useState({});
	const [categoriesList, setCategoriesList]: any = useState([]);

	useEffect(() => {
		setCategoriesList(categories);
	}, [categories]);

	return (
		<>
			<Head>
				<title>Categories</title>
			</Head>
			<AddCategory setCategory={setCategory} category={category} setCategoriesList={setCategoriesList} />
			<CategoriesList categories={categoriesList} setCategory={setCategory} />
		</>
	);
};

export default Categories;

export const getServerSideProps = async (context: any) => {
	let categories = await fetch(`${APP_URL}/api/categories`).then((response) => response.json());
	return {
		props: {
			categories
		}
	};
};
