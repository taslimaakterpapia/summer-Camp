//import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyClass = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [classData, setClassData] = useState([]);
    useEffect(() => {
        fetch(` http://localhost:5000/classes/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClassData(data)
            })
    }, [user?.email])
    console.log(classData)
    return (
        <div className='grid lg:grid-cols-4 mb-96'style={{height:"200px"}}>

            {
                classData.map(data =>
                    <div key={data._id} className="card w-96 bg-blue-200 shadow-xl rounded-lg">
                        <figure>
                            <img src={data.image} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-bold">Total Enrollment: 0</h2>
                            <p>
                                <div className="badge badge-primary">{data.status}</div>
                            </p>
                            <label htmlFor="my_modal_7" className="btn">Your Feedback</label>
            
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="text-lg font-bold">Feedback</h3>
                                    <p className="py-4">{data?.feedback?.feedback || "Feedback not found"}</p>
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                            </div>
                            <Link to={`/dashboard/updateclass/${data._id}`}>
                                <button className="btn btn-outline btn-accent justify-center items-center" style={{marginLeft:"110px", marginTop:"20px"}}>Update</button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyClass;