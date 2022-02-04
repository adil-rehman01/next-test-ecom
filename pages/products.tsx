import { NextPage } from 'next';
import React from 'react'

const Products: NextPage = (props: any) => {
    return (
        <div>
            
        </div>
    )
}

export async function getStaticProps(context: any) {
    let res: any = await fetch('http://localhost:3000/api/products')
    res = await res.json();
    return {
        props: { products: res }, // will be passed to the page component as props
    }
}

export default Products
