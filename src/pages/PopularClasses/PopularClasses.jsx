import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [popularClass, setPopularClass] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/popularClasses')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPopularClass(data)
            })
    }, [])
    return (

        <div className="bg-slate-100 mb-4">
        <h1 className="text-center underline text-5xl mt-2 text-blue-700 font-bold">Popular Classes</h1>
        <div className="grid lg:grid-cols-3 gap-4 mt-8">
          {popularClass.map((popular) => (
            <div className=" w-96 bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-300 ease-in-out">
              <figure>
                <img className="h-64 w-full object-cover" src={popular.image} alt="Shoes" />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-3xl font-bold text-gray-800">{popular.name}</h2>
                <div className="flex justify-center mt-6">
                  <button className="btn btn-accent px-6 py-3 text-lg font-semibold rounded-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300 ease-in-out">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
    );
};

export default PopularClasses;