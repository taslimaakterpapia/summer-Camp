import { Container } from 'postcss';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import navImg from '../../../image/logo.png';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(error => console.log(error))
  }
  const navItems =
    <div className='flex' style={{ marginLeft: '450px' }}>
      <>

        <li><Link to="/">Home</Link> </li>
        <li><Link to="/classes">All Classes</Link></li>
        <li><Link to="/instructor">Instructor</Link></li>
        {user?.email ? <>
          <li><Link to="/dashboard">Dashboard</Link></li>
          {
          user?.photoURL ? <img style={{ width: '50px', marginRight: "15px", borderRadius: '50%' }} src={user.photoURL} alt="" /> : <FaUserCircle style={{ fontSize: '30px' }}></FaUserCircle>
        }
          <li><button className=" bg-white text-blue-700" onClick={handleLogOut}>Log out</button></li>
        </>
          : <>

            <li> <Link to="/login" className="bg-white text-blue-700">Login</Link> </li></>

        }


      </>
    </div>
  return (
    <div className="navbar h-16 mb-4 fixed z-10 bg-opacity-50 max-w-screen bg-blue-700 text-white text-2xl font-bold">
      <div>
        <label className="swap swap-rotate mb-4">

          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />
                   
        </label>
      </div>

      <div className="navbar-start">
      <div className="dropdown">
       <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black-100 rounded-box w-52">
                    {navItems}
                </ul>
            </div>

           

        <Link to="/" className="btn btn-ghost normal-case text-xl ">
        <img className="navimg w-[200px]" src={navImg} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-bold">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end me-5" style={{ marginRight: "80px" }}>
        
        


      </div>
    </div>
  );
};

export default NavBar;