import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import { AuthContext } from '../../providers/AuthProvider';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(` http://localhost:5000/approvedClasses?status=${"approved"}`)
      .then((res) => res.json())
      .then((data) => {

        setClasses(data);
      });
  }, []);
  console.log(classes)
  const addClasses = (cl) => {
    console.log(cl)
    const info = {
      availableSeat: cl.availableSeat,
      instructorEmail: cl.instructorEmail,
      imageUrl: cl.imageUrl,
      instructorName: cl.instructorName,
      className: cl.name,
      price: cl.price,
      status: cl.status,
      //id: cl._id,
      enrolledStudent: cl._enrolledStudent,
      studentClassAdds: user?.email,
      payment: "Pending",
    }
    fetch('http://localhost:5000/addtocart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }
  return (
    <div>
      <div className="grid lg:grid-cols-4 mt-4">
        {classes.map(cl => (
          <div key={cl._id} className="card w-72 bg-blue-200 rounded-lg shadow-xl">
            <figure>
              <img className="w-full h-56 object-cover" src={cl.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 style={{ fontSize: "30px" }} className="card-title">{cl.name}</h2>
              <p style={{ fontSize: "24px" }}>{cl.instructorName}</p>
              <p style={{ fontSize: "24px" }}>{cl.instructorEmail}</p>
              <p style={{ fontSize: "24px" }}>{cl.price}</p>
              <p style={{ fontSize: "24px" }}>{cl.available}</p>
              <div className="card-actions justify-center">
                <button onClick={() => addClasses(cl)} className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
};

export default Classes;