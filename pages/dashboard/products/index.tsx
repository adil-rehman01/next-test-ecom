import Head from 'next/head';
import React, { useState } from 'react';
import AddProduct from '../../../components/dashboard/Products/AddProduct';
import ProductsLists from '../../../components/dashboard/Products/ProductsLists';
import { APP_URL } from '../../../helpers/constants';

const Products = ({ products, categories }: any) => {
	return (
		<div>
			{/* <ProductsLists products={props.products} /> */}
			<AddProduct categories={categories} />
		</div>
	);
};

export default Products;

export async function getServerSideProps(context: any) {
	let products = await fetch(`${APP_URL}/api/products`).then((response) => response.json());
	let categories = await fetch(`${APP_URL}/api/categories`).then((response) => response.json());
	return {
		props: {
			products: products,
			categories: categories
		}
	};
}
