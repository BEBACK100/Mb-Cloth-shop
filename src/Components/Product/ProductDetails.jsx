import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product=useLoaderData()
    console.log(product)
    return (
        <div>
            <p className='text-blue-600 text-4xl'><Link to="/product">Go to Product page</Link></p>
            <h1>This is Your Choiceable Product Details</h1>
            <h1>Product Title Name:<strong>{product.title} </strong></h1>
            <img src={product.thumbnailUrl} alt="" />
        </div>
    );
};

export default ProductDetails;