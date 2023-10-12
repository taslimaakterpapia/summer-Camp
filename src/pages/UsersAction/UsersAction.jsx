import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import {  FaUserTie } from 'react-icons/fa';
import { RiShieldStarLine } from 'react-icons/ri';
//import useAxiosSecure from '../../hooks/useAxiosSecure';
import axios from 'axios';
const UsersAction = () => {
    const { data: userData = [], refetch } = useQuery(
        ["users"],
        async () => {
            const res = await axios.get(" https://summer-camp-server-5khiucgdl-taslimaakterpapia.vercel.app/users");
            return res.data;
        }
    );
    console.log(userData);
    const instructorHandler = (id) => {
        const ready = confirm("Are you sure you want to change roles?");
        if (ready) {
            fetch(` https://summer-camp-server-5khiucgdl-taslimaakterpapia.vercel.app/users/instructor/${id}`, {
                method: "PATCH"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }

    }
    const adminHandler=(id) => {
        const ready = confirm("Are you sure you want to change roles?");
        if (ready) {
            fetch(` https://summer-camp-server-5khiucgdl-taslimaakterpapia.vercel.app/users/admin/${id}`, {
                method: "PATCH"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }
    return (
        <div  style={{width:"500px"}}>
            <table className=" w-full md:w-2/3 lg:w-1/2">
            <thead className="bg-blue-500">
                    <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2 text-white">Name</th>
                        <th className="px-4 py-2 text-white">Email</th>
                        <th className="px-4 py-2 text-white">Instructor</th>
                        <th className="px-4 py-2 text-white">Admin</th>
                    </tr>
                </thead>
                <tbody>
    {userData.map((data, i) => (
        <tr key={i}>
            <th className="text-lg">{i + 1}</th>
            <td className="text-lg font-semibold">{data.name}</td>
            <td className="text-lg">{data.email}</td>
            <td><FaUserTie className="text-lg cursor-pointer" onClick={() => instructorHandler(data._id)} /></td>
            <td><RiShieldStarLine className="text-lg cursor-pointer" onClick={() => adminHandler(data._id)} /></td>
        </tr>
    ))}
</tbody>


            </table>
        </div>
    );
};

export default UsersAction;