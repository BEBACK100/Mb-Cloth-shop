import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingalProduct from './SingalProduct';

const Product = () => {
    const data=useLoaderData()
    // console.log(data);
    return (
        <div>
            <h1>Product is the part:{data.length}</h1>
            <div className=' grid grid-cols-4  gap-4 ms-4 mb-5'>
                {
                    data.map(siproduct=><SingalProduct
                    key={siproduct.id}
                    siproduct={siproduct}
                    ></SingalProduct>)
                }
            </div>
        </div>
    );
};

export default Product;