import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleClass = () => {
    const single = useLoaderData();
   console.log(single)
    return (
        <div>
            This is single class
        </div>
    );
};

export default SingleClass;