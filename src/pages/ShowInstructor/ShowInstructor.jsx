import React, { useEffect, useState } from 'react';
import InstructorCard from '../InstructorCard/InstructorCard';

const ShowInstructor = () => {
    const [instructor,setInstructor] =useState([])
    useEffect(()=>{
        fetch('https://summer-camp-server-5khiucgdl-taslimaakterpapia.vercel.app/usersrole')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setInstructor(data)
        })
    },[])
    return (
       <div>
        <h1 className='text-center underline text-5xl mt-2 text-blue-700 font-bold'>Instructor</h1>
       
         <div className='grid lg:grid-cols-3 gap-4 mt-5 '>
            {instructor.map(instruct=><InstructorCard key={instruct._id} instruct={instruct}></InstructorCard>)}
        </div>
       </div>
    );
};

export default ShowInstructor;