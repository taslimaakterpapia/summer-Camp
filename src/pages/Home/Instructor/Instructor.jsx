import React from 'react';
import { useForm } from "react-hook-form";

const Instructor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        console.log(data)
        fetch('http://localhost:5000/instructor',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ms-4 me-4">
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                    <div className="form-control">
                        {/* <input type="text" {...register("Toy Name")} placeholder="Toy Name" name="name" className="input input-bordered" /> */}
                        <input
                            className="input input-bordered"
                            {...register("name")}
                            placeholder="Instructor Name"

                        />
                    </div>
                    <div className="form-control">
                        {/* <input type="text" {...register("image")} placeholder="Image" name="image" className="input input-bordered" /> */}
                        <input
                            className="input input-bordered"
                            {...register("image")}
                            placeholder="Image Link"
                            type="url"

                        />
                    </div>

                    <div className="form-control">
                        {/* <input type="text-input" {...register("email")} placeholder="Email" type="email" className="input input-bordered" /> */}
                        <input
                            className="input input-bordered"
                            // value={user?.email}
                            {...register("email")}
                            placeholder="Instructor email"
                            type="email"
                        />

                    </div>
                    <div className="form-control">
                        <input
                            className="input input-bordered"
                            {...register("number")}
                            placeholder="Number of classes"
                            type="text"
                        />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-neutral  mx-auto" value="Add a instructor" type="submit" />
                </div>
            </form>
        </div>


    );
};

export default Instructor;