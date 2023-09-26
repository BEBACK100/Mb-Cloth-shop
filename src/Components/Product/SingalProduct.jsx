import React from 'react';
import { Link } from 'react-router-dom';

const SingalProduct = ({siproduct}) => {
    // console.log(siproduct);
   const {title,username,thumbnailUrl,id}=siproduct
    return (
       
          <div>  <Link to={`/productdetails/${id}`}>
           <div className='bg-green-400 border-2 border-black rounded-xl p-5'>
            <h1>Name of Friend:{title} </h1>
            <h1>UserName:{username} </h1>
            <img src={thumbnailUrl} alt="" />
            {/* <p>Product Id:{siproduct.id} </p> */}


        </div>
          
          </Link></div>
    );
};

export default SingalProduct;