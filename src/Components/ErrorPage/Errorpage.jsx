import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error=useRouteError();
    console.error(error)
    return (
        <div className='bg-red-500 w-1/4 p-20  text-center m-20'>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <h1>This is The Error page</h1>
            <h3>Sorry , There is an unexpected error here</h3>
            
        </div>
    );
};

export default Errorpage;