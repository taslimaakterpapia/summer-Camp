import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';

const NewClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useContext(AuthContext);
    const onSubmit = data => {
        console.log(data)
       data.availableSeat = Number(data.availableSeat);

        const newClassData = {
          ...data,
          enrolledStudent: 0,
        };
        fetch('https://summer-camp-server-5khiucgdl-taslimaakterpapia.vercel.app/classes',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newClassData)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div >

                    <div className="form-control w-96">

                        <input
                            className="input input-bordered mb-4 "
                            {...register("name")}
                            placeholder="Class Name"

                        />
                    </div>

                    <div className="form-control">

                        <input
                            className="input input-bordered mb-4"
                            {...register("image")}
                            placeholder="Image Link"
                            type="url"

                        />
                    </div>
                    <input
                        className="input input-bordered mb-4 w-96"
                        {...register("instructorName")}
                        placeholder="Instructor Name"
                        value={user?.displayName}

                    />
                    <div className="form-control">

                        <input
                            className="input input-bordered mb-4 w-96"

                            {...register("instructorEmail")}
                            placeholder="Instructor email"
                            value={user?.email}
                            type="email"
                        />

                    </div>

                    <div className="form-control">

                        <input
                            className="input input-bordered mb-4"

                            {...register("price")}
                            placeholder="Price"
                            type="number"
                        />

                    </div>
                    <div className="form-control">
                        <input
                            className="input input-bordered mb-4"
                            {...register("availableSeat")}
                            placeholder="available Seat"
                            type="number"
                        />
                    </div>
                    <div className="form-control">
                        <input
                            className="input input-bordered mb-4"
                            {...register("status")}
                            placeholder="Status"
                            value={"pending"}
                            type="text"
                            hidden
                        />
                    </div>
                    <div className="form-control">
                        <input
                            className="input input-bordered mb-4"
                            {...register("enrolledStudent")}
                            placeholder="Enrolled Student"
                            value={0}
                            type="text"
                            hidden
                        />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-outline btn-success  mx-auto" value="Add a Class" type="submit " />
                </div>
            </form>
        </div>
    );
};

export default NewClass;