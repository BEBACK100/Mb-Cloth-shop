import React from 'react';

const SingalProduct = ({siproduct}) => {
    console.log(siproduct);
    return (
        <div className='bg-green-400 border-2 border-black rounded-xl p-5'>
            <h1>Name of Friend:{siproduct.title} </h1>
            <h1>UserName:{siproduct.username} </h1>
            <img src={siproduct.thumbnailUrl} alt="" />
            <p>Product Id:{siproduct.id} </p>

        </div>
    );
};

export default SingalProduct;