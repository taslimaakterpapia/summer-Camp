import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const DashBoard = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center bg-white">
                <Outlet></Outlet>
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div className="drawer-side bg-blue-700 text-white">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-">
                    {/* Sidebar content here */}
                    <li><AiFillHome className='text-lg '></AiFillHome> <Link to='/'>Users Home</Link></li>

                    {
                    !isAdmin && !isInstructor && <>
                      <li><Link to="/dashboard/selectitem" className=" text-lg">My Selected Classes</Link></li>
                    <li><Link to="/dashboard/enrolled text-lg">My Enrolled Classes</Link></li>
                    </>
                   }

                 

                    {isInstructor && <>
                    <li><Link to='/dashboard/class' className=" text-lg">Add Class</Link></li>
                    
                    <li><Link to="/dashboard/myclass" className=" text-lg">My Classes</Link></li>
                   </>}
                    
                    {/* <li><Link to='/dashboard/class' className="hover:text-yellow-300 text-lg">Add Class</Link></li>
                    
                    */}

                    {isAdmin && <>
                        <li><Link to="/dashboard/allclass" className=" text-lg">Manage Classes</Link></li>
                        <li><Link to="/dashboard/action" className=" text-lg">Manage Users</Link></li>
                    </>}
                    



                </ul>

            </div>
        </div>
    );
};


export default DashBoard;