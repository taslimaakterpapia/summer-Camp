import React from 'react';

import { Link, useRouteError } from 'react-router-dom';
import { HiExclamation } from 'react-icons/hi';

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "100vh",
          padding: "50px",
        }}
        className="d-flex align-items-center "
      >
        <div className="container d-flex flex-column align-items-center justify-content-center mx-auto  bg-white ">

          <img className='pl-48' style={{ height: "400px", width: "800px", color: "#f90606" }} src="https://merahputih.com/media/c0/0e/d2/c00ed25b79766b3cafca6962d62714ad.png" alt="" />


          <div className="max-w-md text-center ml-72">
            <Link
              to="/"
              style={{ fontSize: "18px", fontWeight: "600" }}
              className="px-24 py-3 rounded  bg-blue-700 text-white"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;



